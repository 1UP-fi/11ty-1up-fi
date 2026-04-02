# 1UP.fi Static Content Repository

[![Build and Deploy to GitHub Pages](https://github.com/1UP-fi/11ty-1up-fi/actions/workflows/deploy.yml/badge.svg)](https://github.com/1UP-fi/1UP-fi.github.io/actions/workflows/deploy.yml)

This repository is used to generate and host the static content for 1UP.fi.

## Development

This section outlines the requirements for developing this site locally.

### Prerequisites

To develop and run the project, you'll need the following installed on your system:

| Requirement | Description | **Example Installation Command** |
| :--- | :--- | :--- |
| **Node.js** | JavaScript runtime environment. | `sudo apt install nodejs` |
| **npm** | Node Package Manager. | `sudo apt install npm` |

#### Setup Steps

1.  **Install Node dependencies:**
    ```bash
    npm install
    ```

### Workflow

* For typical local development, use:
    ```bash
    npm start
    ```
* To create a build without starting the server, use:
    ```bash
    npm run build
    ```
