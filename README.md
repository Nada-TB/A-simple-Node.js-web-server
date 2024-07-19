# Node.js Web Server Application

A simple Node.js web server that serves static HTML pages and CSS stylesheets. This application uses the HTTP module to handle requests and deliver content based on the URL path. It's a basic example of how to create a web server using Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

This project demonstrates a basic Node.js web server that serves static files such as HTML and CSS. The server listens on a specified port and responds to requests by returning the appropriate files or a 404 error page if the requested resource is not found. This setup is useful for understanding how to handle HTTP requests and serve static content with Node.js.

## Demo

Since this project is a backend application, a live demo isn't applicable. However, you can test the server by running it locally and accessing the provided URLs in your web browser.

## Requirements

- Node.js (version 12.x or higher)

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Nada-TB/A-simple-Node.js-web-server.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3. **Ensure Node.js is installed on your system.** You can download it from [Node.js official site](https://nodejs.org/).

## Usage

1. **Run the server:**

    ```bash
    node app.js
    ```

2. **Open a web browser and navigate to** `http://localhost:3000` to view the homepage. You can also visit the following paths:

    - `http://localhost:3000/about` - About page
    - `http://localhost:3000/projects` - Projects page
    - `http://localhost:3000/contact` - Contact page
    - `http://localhost:3000/style/style.css` - CSS stylesheet

3. **Check the terminal for the message** `we are live!` to confirm that the server is running.

## Features

- **Static File Serving:** Serves HTML and CSS files based on URL paths.
- **Error Handling:** Returns a 404 error page if the requested resource is not found.
- **Simple Routing:** Basic routing functionality to handle different URL paths.

## Technologies Used

- **Node.js:** For creating the web server and handling HTTP requests.
- **HTTP Module:** For managing server requests and responses.
- **File System (fs) Module:** For reading files from the file system.

## Project Structure

```plaintext
your-repo-name/
├── app.js                # Main server file that handles HTTP requests
├── views/                # Directory for HTML files
│   ├── home.html         # Homepage HTML file
│   ├── about.html        # About page HTML file
│   ├── projects.html     # Projects page HTML file
│   ├── contact.html      # Contact page HTML file
│   └── notfound.html     # 404 error page HTML file
├── style/                # Directory for CSS files
│   └── style.css         # CSS stylesheet
├── README.md             # Project documentation
```

## Challenges and Learnings

1. **Challenge:** Implementing File Serving
   - **Action:** Utilized the `fs` module to read and serve static files.
   - **Result:** Enabled the server to deliver HTML and CSS files based on URL requests.

2. **Challenge:** Handling Different URL Paths
   - **Action:** Implemented basic routing in the server code to handle different paths.
   - **Result:** Successfully served different pages and managed error handling for unknown paths.

3. **Challenge:** Ensuring Correct Content-Type Headers
   - **Action:** Set appropriate `Content-Type` headers for HTML and CSS files.
   - **Result:** Ensured that browsers correctly interpret and display the content.

## Future Improvements

- **Add More Features:** Implement more advanced routing and serve additional types of files (e.g., JavaScript, images).
- **Error Handling:** Enhance error handling with custom error messages and logging.
- **Security Measures:** Add basic security features such as rate limiting and input validation.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
