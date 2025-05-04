# OAuth 2.0 Learning App - Monorepo

Welcome to the **OAuth 2.0 Learning App** monorepo! This repository serves as a comprehensive learning platform for understanding and experimenting with OAuth 2.0 concepts. Built with a modular architecture, this app is designed to provide hands-on experience with the OAuth authentication framework.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About the Project

This repository is a monorepo designed to help developers learn and experiment with OAuth 2.0. It includes examples, best practices, and a modular architecture for building and testing OAuth 2.0 implementations.

Whether you're a beginner looking to understand the basics or an experienced developer refining your skills, this repository offers tools, guides, and examples to enhance your knowledge.

### Goals:

- Simplify the learning curve for OAuth 2.0.
- Provide modular, reusable components for OAuth 2.0 implementations.
- Offer practical, hands-on examples for experimentation.

---

## Features

- **Comprehensive OAuth 2.0 Examples**: Covers various flows like Authorization Code Flow, Implicit Flow, Client Credentials, and Resource Owner Password Credentials.
- **Modular Architecture**: Easy to add or remove modules based on learning objectives.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Demo Applications**: Pre-built applications to test OAuth 2.0 flows.
- **Hands-On Exercises**: Includes examples for integrating with popular identity providers like Google, GitHub, and Okta.

---

## Tech Stack

This project is primarily developed using the following technologies:

- **Programming Languages**: 
  - TypeScript (96.3%)
  - JavaScript (3.7%)
- **Framework**: Node.js
- **Build Tools**: 
  - Webpack
  - Babel
- **Package Manager**: Yarn / npm
- **Testing Framework**: Jest

---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Yarn](https://yarnpkg.com/) or npm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sisovin/oauth-learning-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd oauth-learning-app
   ```
3. **Install dependencies**:
   Using Yarn:
   ```bash
   yarn install
   ```
   Or using npm:
   ```bash
   npm install
   ```

### Running the App

1. **Start the development server**:
   Using Yarn:
   ```bash
   yarn start
   ```
   Or using npm:
   ```bash
   npm run start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Project Structure

Here's an overview of the directory structure for the monorepo:

```
oauth-learning-app/
├── packages/
│   ├── server/             # OAuth 2.0 server implementation
│   ├── client/             # Frontend client applications
│   ├── shared/             # Shared utilities and configurations
├── .github/                # GitHub-specific files (e.g., workflows)
├── tests/                  # Test cases for the project
├── .eslintrc.js            # Linting configuration
├── .prettierrc             # Code formatting configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## Usage

### Examples of OAuth 2.0 Flows

- **Authorization Code Flow**: 
  - Find code examples in the `packages/server` module.
  - Run the app and test against a demo identity provider.

- **Implicit Flow**:
  - Refer to the `packages/client` for examples of single-page applications implementing this flow.

- **Client Credentials**:
  - Use the server module for machine-to-machine authentication examples.

- **Resource Owner Password Credentials**:
  - Demonstrates direct user authentication with username and password.

### Integrations

- Google OAuth
- GitHub OAuth
- Custom OAuth server

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure your code adheres to the existing coding standards and include relevant tests.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Acknowledgments

- [OAuth 2.0 Specification](https://oauth.net/2/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Node.js Documentation](https://nodejs.org/)
- [Jest Testing Framework](https://jestjs.io/)

---

## Contact

**Repository Owner**: [sisovin](https://github.com/sisovin)

For issues or feature requests, please use the [GitHub Issues](https://github.com/sisovin/oauth-learning-app/issues) page.

---
