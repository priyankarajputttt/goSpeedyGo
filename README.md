# goSpeedyGo

This is a simple RESTful CRUD API built using Node.js, Express, and MongoDB that lets you manage users with ease. You can 
create, read, update, or delete users using the APIs.

## Table of Contents

- [What It Does](#what-it-does)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [How to Test It](#how-to-test-it)
- [Documentation](#documentation)

## What It Does

The APIs allows you to:
- Create new users
- Fetch all users or a single user by their ID
- Update user details like name, age, and salary
- Delete users when they're no longer needed

## Tech Stack

Here's what I used to build this:
- **Node.js**: The runtime environment
- **Express**: For building the API
- **MongoDB**: The database to store user data
- **Joi**: For input validation
- **Swagger UI**: To document the API

## Getting Started

To get this API up and running on your machine, follow these steps:

1. **Clone the repo**:
   ```bash
   git clone https://github.com/priyankarajputttt/goSpeedyGo.git
   cd goSpeedyGo
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **(Optional)** Install Nodemon for development:
   ```bash
   npm install --save-dev nodemon
   ```

## API Endpoints

### 1. Create a User
- **POST** `/users`
- **Request Body**:
    ```json
    {
      "userId": "12345",
      "name": "Jane Doe",
      "userImage": "https://example.com/janedoe.jpg",
      "age": 28,
      "salary": 65000
    }
    ```
- **Responses**:
    - `201 Created`: User created!
    - `400 Bad Request`: Oops! There was a validation error.

### 2. Get All Users
- **GET** `/users`
- **Response**:
    - `200 OK`: Returns a list of all users.

### 3. Get a User by ID
- **GET** `/users/{userId}`
- **Response**:
    - `200 OK`: User found!
    - `404 Not Found`: Sorry, we couldn’t find that user.

### 4. Update User Details
- **PUT** `/users/{userId}`
- **Request Body**:
    ```json
    {
      "name": "Jane Doe Updated",
      "userImage": "https://example.com/janedoe_updated.jpg",
      "age": 30,
      "salary": 70000
    }
    ```
- **Responses**:
    - `200 OK`: User updated successfully!
    - `400 Bad Request`: Validation error.
    - `404 Not Found`: User not found.

### 5. Delete a User
- **DELETE** `/users/{userId}`
- **Response**:
    - `200 OK`: User deleted!
    - `404 Not Found`: Couldn’t find that user.

## How to Test It

You can test the API using tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). Just hit the endpoints with the request bodies mentioned above and see how it goes!

### Testing Joi Validation
Try sending different inputs to see how the API responds to valid and invalid data. It’s a great way to test the input validation.

## Documentation

To make it easy to understand and use, I’ve documented the API using Swagger. Just head over to `http://localhost:3000/api-docs` once the server is running, and you’ll see all the details laid out nicely.