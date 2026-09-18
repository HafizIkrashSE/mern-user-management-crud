# MERN User Management CRUD

A full-stack **MERN CRUD application** for managing users. This project connects a React frontend with an Express.js and MongoDB backend to perform complete Create, Read, Update, and Delete operations.

## 🚀 Live Demo

**Live URL:** Add your deployed URL here

## 📌 Features

* Create new users
* View all users
* Update existing users
* Delete users
* React frontend with React Router
* REST API using Express.js
* MongoDB database with Mongoose
* Axios for API requests
* Responsive and clean user interface
* Full frontend and backend integration

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

## 📂 Project Structure

```text
mern-user-management-crud/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Users.jsx
│   │   ├── CreateUser.jsx
│   │   └── UpdateUser.jsx
│   ├── package.json
│   └── ...
│
├── server/
│   ├── models/
│   │   └── Users.js
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mern-user-management-crud.git
```

### 2. Open the project

```bash
cd mern-user-management-crud
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

## ▶️ Running the Project

### Start the Backend

Inside the `server` folder:

```bash
npm start
```

The backend server will run on the configured port.

### Start the Frontend

Inside the `client` folder:

```bash
npm run dev
```

Vite will provide the local development URL.

## 🔄 CRUD Operations

| Operation | Description           |
| --------- | --------------------- |
| Create    | Add a new user        |
| Read      | Display all users     |
| Update    | Edit an existing user |
| Delete    | Remove a user         |

## 🔗 API

The React frontend communicates with the Express backend through REST API endpoints.

Example:

```text
GET    /users
POST   /create
PUT    /update/:id
DELETE /delete/:id
```

Update these endpoints if your backend uses different routes.

## 🗄️ Database

This project uses **MongoDB** with **Mongoose** for storing user information.

Example user fields:

```text
Name
Email
Age
```

The exact fields depend on the current Mongoose schema.

## 🎨 UI

The application includes:

* Responsive layout
* Centered user forms
* Modern header
* Primary blue theme
* Create, update, and delete interfaces
* Clean user management interface

## 📚 What I Learned

Through this project, I practiced:

* Connecting React with Express
* Building REST APIs
* Working with MongoDB and Mongoose
* Using Axios in React
* React Router
* CRUD operations
* Frontend and backend integration
* Handling API requests
* Managing React form state
* Deploying a full-stack application

## 👨‍💻 Author

**Hafiz Ikrash Riaz**

* GitHub: https://github.com/HafizIkrashSE
* LinkedIn: https://www.linkedin.com/in/hafiz-ikrash-riaz-114899335/
* LeetCode: https://leetcode.com/u/ikrash_codes/


⭐ If you find this project useful, consider giving it a star!
