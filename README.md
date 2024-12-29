# docker-email-manager

This is a simple email management application built with Node.js, Express, and MongoDB. The application allows users to submit their email addresses and stores them in a MongoDB database. The application is containerized using Docker.

## Features

- Submit email addresses through a web form
- Store email addresses in a MongoDB database
- Display stored email addresses on the web page

 ## Prerequisites

- Docker

## Getting Started
**1. Create a Docker network**

docker network create my-eapp

**2. Run the MongoDB Container**

docker run -d --network my-eapp --name mongodb mongo:latest

**3. Build the Docker Image for Your Application**

docker build -t your-username/docker-email-app .

**4. Run the MongoDB Container:**

   Run the MongoDB container and connect it to the Docker network

   docker run -d --network my-eapp --name mongodb -p 27017:27017 mongo:latest

**5. Run the Application Container**

docker run -d -p 3000:3000 --network my-eapp --name myapp your-username/docker-email-app

**6. Access the Application**

Open your web browser and navigate to http://localhost:3000.

![image](https://github.com/user-attachments/assets/b15524ec-97e9-4c0d-8a1f-ab0834245d9b)
