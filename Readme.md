<p align="center">
  <img src="https://github.com/SummerBreak-OpenSource-Projects/Plagrasim_detector/assets/127578046/9fc11c87-984c-4d41-82c2-37f395f5ec56" alt="Image" width="600" height="200">
</p>

# Trikina

## Overview

Trikina is a plagiarism detector project that aims to provide a robust solution for detecting instances of plagiarism in academic documents. It offers a user-friendly interface for uploading documents and analyzing them for potential plagiarized content. The system incorporates web scraping techniques to compare uploaded documents with relevant online sources, primarily Wikipedia, to identify similarities and potential instances of plagiarism.

## Features

- **File Uploading Service:** Users can upload PDFs, DOC files, or plain text documents for analysis.
- **Plagiarism Detection:** The system employs advanced algorithms to analyze uploaded documents and generate reports on potential instances of plagiarism.
- **Web Scraping:** Utilizes web scraping techniques to fetch data from relevant sources, primarily Wikipedia, for comparison with uploaded documents.
- **User Interface:** The frontend interface, built with NextJS, provides a user-friendly experience for document upload and analysis.
- **Backend Management:** The backend, powered by Django, manages document processing, plagiarism detection algorithms, and database management.

## System Design

The Plagiarism Detector system follows a modular architecture, comprising frontend and backend components:

### Frontend (NextJS)

- **Components:** Various components for user authentication, document upload, analysis reports, and user interface interactions.
- **User Authentication:** Implements user authentication mechanisms for secure access to the system.
- **Document Upload:** Allows users to upload PDFs, DOC files, or plain text documents for plagiarism analysis.
- **Analysis Reports:** Presents detailed reports on potential instances of plagiarism within uploaded documents.

### Backend (Django)

- **API Endpoints:** Defines RESTful API endpoints for communication between frontend and backend components.
- **Document Processing:** Handles document parsing, text extraction, and storage in the database.
- **Plagiarism Detection:** Implements algorithms for comparing uploaded documents with online sources to identify similarities and potential instances of plagiarism.
- **Web Scraping:** Utilizes web scraping techniques to fetch data from Wikipedia and other relevant sources for comparison with uploaded documents.
- **Database Management:** Manages storage and retrieval of documents, analysis reports, and user data.

## Contributors

- [Biraj](https://github.com/Sthabiraj)
- [Kushal](https://github.com/Dev00kushal)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
