# Visual2Speech

Visual2Speech is a web-based application that aims to assist visually impaired students in understanding diagrams. It utilizes artificial intelligence to generate text descriptions of diagrams, making it easier for visually impaired students to comprehend the subject matter. In addition, Visual2Speech also performs optical character recognition (OCR) on scanned pages to make the text content of the document accessible.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

Visual2Speech offers a range of features that make it a powerful tool for assisting visually impaired students in understanding diagrams and accessing text content from scanned pages.

### Automatic Generation of Text Descriptions

Visual2Speech uses AI to generate text descriptions of diagrams. This feature enables visually impaired students to understand the content of diagrams, even if they are unable to see them. The AI model used by Visual2Speech is trained on a wide range of diagrams, ensuring that it can accurately describe the content of any diagram uploaded to the application.

### Optical Character Recognition

In addition to generating text descriptions for diagrams, Visual2Speech also performs optical character recognition (OCR) on scanned pages. This feature enables visually impaired students to access the text content of scanned pages, even if the original document was not designed with accessibility in mind. Visual2Speech uses EasyOCR to perform OCR, which ensures that the text extracted from scanned pages is accurate and reliable.

### User-Friendly Interface

Visual2Speech provides a simple and intuitive interface for uploading and viewing diagrams and scanned pages. The interface is designed to be accessible to all users, regardless of their level of technical expertise.

### Seamless Integration of Node.js and Python

Visual2Speech is built using a combination of Node.js and Python, which enables the application to provide a seamless and efficient user experience. Node.js is used for the front-end, while Python is used for the back-end. This integration ensures that the application can handle a large number of requests without compromising on performance.

### State-of-the-Art AI Capabilities

Visual2Speech uses AI libraries to provide state-of-the-art AI capabilities. These libraries enable Visual2Speech to generate accurate and meaningful text descriptions for diagrams. Visual2Speech also uses PyTorch to enhance the AI capabilities, providing a flexible and efficient framework.

### Handling of PDF Files

Visual2Speech uses pdf2image, a Python library that converts PDF pages into images, to handle PDF files. This feature enables Visual2Speech to process scanned PDFs and perform OCR on each page. This ensures that visually impaired students can access the text content of PDF files, even if the original document was not designed with accessibility in mind.

### Image Processing

Visual2Speech uses OpenCV, a widely-used computer vision library, for image processing tasks. OpenCV provides various tools and algorithms for image manipulation and preprocessing, which enables Visual2Speech to enhance the quality of images and improve OCR accuracy. This feature ensures that the text extracted from scanned pages is accurate and reliable.

### Language Identification

Visual2Speech uses Py3Langid, a Python library that accurately detects the language of text, for language identification. This feature is particularly useful when processing multilingual documents, ensuring that the correct language is used when generating text descriptions or performing OCR.

### Audio Descriptions

Visual2Speech uses gTTS (Google Text-to-Speech) to generate audio descriptions. This feature enables visually impaired students to listen to a description of the diagram, which can help them understand the content more effectively. gTTS is a Python library that converts text to speech, which can be played back to visually impaired students to help them understand the diagrams.


These features work together to create a powerful and efficient tool for assisting visually impaired students in understanding diagrams and accessing text content from scanned pages. Visual2Speech is designed to be a user-friendly and accessible application that can help visually impaired students learn more effectively.

## Technologies

Visual2Speech is built using the following technologies:

- Node.js for the front-end.
- Python for the back-end.
- EasyOCR for optical character recognition.
- PyTorch for deep learning capabilities.
- pdf2image for converting PDF pages to images.
- OpenCV for image processing.
- Py3Langid for language identification.
- OpenAI for text accuracy
- Google Text-to-Speech (gTTS) for generating audio descriptions.

Node.js is a popular platform for building web applications, with a large ecosystem of modules and tools that make it easy to develop and deploy applications quickly. Python, on the other hand, is a powerful language for scientific computing and data analysis, making it an ideal choice for the back-end of Visual2Speech.

Visual2Speech also incorporates EasyOCR for optical character recognition. EasyOCR is a Python library that supports multiple languages and provides accurate text extraction from images. This allows Visual2Speech to extract text from scanned pages and make it accessible to visually impaired students.

PyTorch, another powerful deep learning library, is used in Visual2Speech to enhance the AI capabilities. PyTorch provides a flexible and efficient framework for building and training deep learning models, enabling Visual2Speech to deliver state-of-the-art performance in generating text descriptions.

To handle PDF files, Visual2Speech utilizes pdf2image, a Python library that converts PDF pages into images. This allows Visual2Speech to process scanned PDFs and perform OCR on each page.

For image processing tasks, Visual2Speech incorporates OpenCV, a widely-used computer vision library. OpenCV provides various tools and algorithms for image manipulation and preprocessing, enabling Visual2Speech to enhance the quality of images and improve OCR accuracy.

Given the large inaccuracies in OCR technology, OpenAI is used to improve the accuracy of the transcripts of the digital text.

gTTS (Google Text-to-Speech) is used in Visual2Speech for generating audio descriptions. gTTS is a Python library that converts text to speech, which can be played back to visually impaired students to help them understand the diagrams. This functionality provides an additional layer of accessibility to the application.

Finally, Py3Langid is used in Visual2Speech for language identification. It is a Python library that accurately detects the language of text, which is particularly useful when processing multilingual documents.

These technologies work together to create a robust and efficient system that helps visually impaired students understand diagrams and access the text content of scanned pages in an accessible format.


## Contributing

Contributions to Visual2Speech are welcome and encouraged! To contribute, follow these steps:

1. Fork the repository.

2. Create a new branch with your changes:

   


   `git checkout -b my-feature-branch`
   



3. Make changes and commit them:

   


   `git commit -m "Add my feature"`
   



4. Push your changes to your branch:

   


   `git push origin my-feature-branch`
   



5. Submit a pull request.

## License

Visual2Speech is licensed under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE](https://github.com/HKU-Hackathon-2023/Hackathon-gp3/main/LICENSE) for more information.
