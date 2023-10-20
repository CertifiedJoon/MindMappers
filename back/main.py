from typing import Annotated
from fastapi.staticfiles import StaticFiles
import requests
from fastapi import FastAPI, Response, UploadFile
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import pytesseract
import openai
import json
from dotenv import load_dotenv
import os
import replicate
from starlette.responses import FileResponse

load_dotenv()
openai.api_key = os.environ["OPEN_AI_KEY"]


def get_completion(
    prompt: str,
):  # Andrew mentioned that the prompt/ completion paradigm is preferable for this class
    model = "gpt-3.5-turbo"
    messages = [
        {
            "role": "system",
            "content": f"""
You are a bot that helps a librarian in daily tasks. The librarian is working to help visually impaired students.
Assist the librarian as best as possible.
""",
        },
        {"role": "user", "content": prompt},
    ]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,  # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]


app = FastAPI()
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/describe-images/")
async def create_upload_files(files: list[UploadFile]):
    file = files[0]

    file_location = f"img/{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())

    result = replicate.run(
        "pharmapsychotic/clip-interrogator:8151e1c9f47e696fa316146a2e35812ccf79cfc9eba05b11c7f450155102af70",
        input={"image": open(f"img/{file.filename}", "rb")},
    )

    CHUNK_SIZE = 1024
    url = "https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB"

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": os.environ["EL_KEY"],
    }

    data = {
        "text": result[:500],
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.5},
    }

    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 400:
        print(response.text)
    else:
        print("success")
        with open("output2.mp3", "wb") as f:
            for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                if chunk:
                    f.write(chunk)

        with open("output2.mp3", "rb") as f:
            contents = f.read()  # file contents could be already fully loaded into RAM

        return FileResponse(
            path=os.getcwd() + "/output/" + "output2.mp3",
            media_type="application/octet-stream",
            filename="smt.mp3",
        )

    return FileResponse(
        path=os.getcwd() + "/output/" + "output2.mp3",
        media_type="application/octet-stream",
        filename="smt.mp3",
    )


@app.post("/upload-images/")
async def create_upload_files(files: list[UploadFile]):
    file = files[0]

    file_location = f"img/{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())

        # Simple image to string
        pytesseract.pytesseract.tesseract_cmd = (
            r"C:\Program Files\Tesseract-OCR\tesseract.exe"
        )

        ocr_result = pytesseract.image_to_string(Image.open(file_location))

        prompt = f"""
        I have utilized OCR technology to read an old manuscript. But the content seems unclear due to
        limitation of OCR technology. I am a librarian who has to turn this text into understandable natural language for visually impaired students.
        I would like you to infer and guess the original content of the old manuscript and reconstruct
        the given text into natural language. here is the text to interpret:

        ```
        {ocr_result}
        ```

        Return the output in the three paragraphs, keeping in mind that the output will be read directly to visually impaired students. Explain, in the begining of each paragraph, the purpose of the paragraph.
        1. Brief introduction of the above text from OCR so that visually impaired student gets an idea before reading the text.
        2. The text word by word. Edit only unnatural language into natural language.
        3. Conclusion of the text so that visually impaired student know the content has ended.
        """

        result = get_completion(prompt)
        result = (
            "Hello, I am jane and I will be reading the text to you. ... Firstly, I will introduce you to the context. ... Secondly, I will read out the text. ... Thirdly, I will conclude the text. Here we go!\n "
            + result
        )
        print(result)

        CHUNK_SIZE = 1024
        url = "https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB"

        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": os.environ["EL_KEY"],
        }

        data = {
            "text": result[:500],
            "model_id": "eleven_monolingual_v1",
            "voice_settings": {"stability": 0.5, "similarity_boost": 0.5},
        }

        response = requests.post(url, json=data, headers=headers)
        if response.status_code == 400:
            print(response.text)
        else:
            print("success")
            with open("output.mp3", "wb") as f:
                for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                    if chunk:
                        f.write(chunk)

            with open("output.mp3", "rb") as f:
                contents = (
                    f.read()
                )  # file contents could be already fully loaded into RAM

            return FileResponse(
                path=os.getcwd() + "/output/" + "output.mp3",
                media_type="application/octet-stream",
                filename="smt.mp3",
            )

    return FileResponse(
        path=os.getcwd() + "/output/" + "output.mp3",
        media_type="application/octet-stream",
        filename="smt.mp3",
    )


@app.get("/")
async def main():
    content = """
<form action="/upload-images/" enctype="multipart/form-data" method="post">
<input name="files" type="file">
<input type="submit">
</form>
</body>
    """
    return HTMLResponse(content=content)
