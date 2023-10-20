import React, { useRef, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
axios.defaults.baseURL = "http://localhost:8000";

function ChooseRoleToUpload() {
  const [ps, setParams] = useState("");
  //   const [fileType, setFileType] = useState('');
  const [results, setResults] = useState("");
  const formRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  //   const [showAudio, setShowAudio] = useState(false)

  function transform(elements) {
    let params = new FormData();
    for (let element of elements) {
      if (element.name === "file") {
        const file = element.files[0];
        const fileFormat = getFileFormat(file.name);
        console.log("fileFormat", fileFormat);
        params.append("file", file);
        params.append("fileFormat", fileFormat);
      } else if (element.name === "role") {
        params.append("role", element.value);
      } else {
        params.append(element.name, element.value);
      }
    }
    return params;
  }

  const getFileFormat = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    // Add more file formats and their corresponding fileFormat values as needed
    if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      return "image";
    } else if (extension === "pdf") {
      return "pdf";
    } else {
      return "unknown";
    }
  };

  const handleStudentUpload = async (e) => {
    e.preventDefault();
    const params = transform(Array.from(formRef.current.elements));

    if (params.get("file") === null) {
      alert("Please  upload a file");
      return;
    }
    // setFileType('manual');
    const formData = new FormData();
    formData.append("files", params.get("file"));
    const resp = await axios.post("/describe-images/", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(resp.data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "audio.mp3");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setAudioSource(url);
  };

  const [isPlaying, setPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState("");

  const handleButtonClick = () => {
    setPlaying(!isPlaying);
  };

  const GetProcessed = (params) => {
    axios
      .post("http://API/process", params)
      .then((response) => {
        const audioData = response.blob();
        setAudioSource(URL.createObjectURL(audioData));
        setShowUpload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const fetchAudio = async () => {
  //   try {
  //     setAudioSource(URL.createObjectURL(audioData));
  //     setShowUpload(false);
  //     console.log("fetchAudio");
  //   } catch (error) {
  //     console.log("Error fetching audio:", error);
  //   }
  // };

  const handleUploadManualScripts = async (e) => {
    e.preventDefault();
    const params = transform(Array.from(formRef.current.elements));

    if (params.get("file") === null) {
      alert("Please  upload a file");
      return;
    }
    // setFileType('manual');
    const formData = new FormData();
    formData.append("files", params.get("file"));
    const resp = await axios.post("/upload-images/", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(resp.data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "audio.mp3");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setAudioSource(url);
  };

  const [role, setRole] = useState("");

  const roleTypeOfStu = () => {
    setRole("student");
    setShowUpload(true);
  };

  const roleTypeOfStaff = () => {
    setRole("staff");
    setShowUpload(true);
  };

  return (
    <div className="submit-event">
      <div className="wrapper border p-5">
        <div className="border-bottom py-4 mb-5 d-flex text-center">
          <p className="fs-2">Please select type of document first:</p>
        </div>

        <Button
          className="mx-3 mb-4 px-4"
          style={{
            backgroundColor: "rgb(10,10,10)",
            width: "280px",
            height: "55px",
          }}
          variant="primary"
          type="submit"
          onClick={roleTypeOfStu}
        >
          General Image / PDF
        </Button>
        <Button
          className="mx-3 mb-4 px-4"
          style={{
            backgroundColor: "rgb(10,10,10)",
            width: "280px",
            height: "55px",
          }}
          variant="primary"
          type="submit"
          onClick={roleTypeOfStaff}
        >
          Manuscript
        </Button>
        <br />

        {role === "student" && showUpload && (
          <>
            <Card className="mt-5 p-1">
              Hi, {role}, please Upload the file of image or PDF with image
            </Card>
            <br />

            <Form ref={formRef}>
              <Form.Group controlId="file">
                <Form.Label>Upload file of .jpg, .jpeg, .png or PDF</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                />
              </Form.Group>
              <Form.Group controlId="role" className="displayNone">
                <Form.Control
                  type="text"
                  name="role"
                  value="student"
                  readOnly
                />
              </Form.Group>

              {/* Add other form fields if needed */}
            </Form>

            <Button
              className="mx-3 px-4"
              style={{
                backgroundColor: "rgb(10,90,10)",
                width: "280px",
                height: "50px",
              }}
              onClick={handleStudentUpload}
            >
              Upload
            </Button>
          </>
        )}

        {role === "staff" && showUpload && (
          <>
            <Card className="mt-5 p-1">
              Hi, {role}, please Upload the file of manualscripts
            </Card>
            <br />

            <Form ref={formRef}>
              <Form.Group controlId="file">
                <Form.Label>Upload Manual Scripts</Form.Label>
                <Form.Control type="file" name="file" accept=".png" />
              </Form.Group>
              <Form.Group controlId="role" className="displayNone">
                <Form.Control type="text" name="role" value="staff" readOnly />
              </Form.Group>
            </Form>

            <Button
              className="mx-3 px-4"
              style={{
                backgroundColor: "rgb(10,90,10)",
                width: "280px",
                height: "50px",
              }}
              onClick={handleUploadManualScripts}
            >
              Upload manualscripts
            </Button>
          </>
        )}

        {/* { !showUpload && */}
        {audioSource && (
          <div>
            <div className="mt-5 mb-3">
              Speech results, please click play button:
            </div>

            <Button onClick={handleButtonClick}>
              {isPlaying ? "Pause" : "Play"}
            </Button>
            {isPlaying && <audio src={audioSource} autoPlay />}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChooseRoleToUpload;
