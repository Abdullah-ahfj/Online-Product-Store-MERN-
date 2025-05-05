# Online Product Store

An online product management application where users can add, edit, delete, and view products. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project demonstrates a complete CRUD application with a responsive UI and RESTful backend API.

## Features

- Add new products with image, title, price, and description
- View a list of all products
- Edit product details
- Delete products
- RESTful API integration

## Tech Stack

**Frontend:**
- React (vite)
- React Router
- Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/7ff5bae9-815a-4f81-ad5c-806d68094557)


### Add Product
![Add Product](https://github.com/user-attachments/assets/55accd00-e46a-480f-b628-c7430ce19ec6)


### Edit Product
![Edit Product](https://github.com/user-attachments/assets/9a3e3b1c-d8cf-4202-ba26-fc1f7bde0972)


## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/online-product-store.git
   cd online-product-store

2. Install backend dependencies:
   ```bash
    npm install

3. Install frontend dependencies:
   ```bash
    cd ./frontend
    npm install

4. Set up environment variables:
In both backend/.env, add your config values. Example for backend:
   ```ini
   MONGO_URI=mongodb://localhost:27017/product-store
   PORT=5000

5. Start the backend server:
   ```bash
   cd ..
   npm run dev

6. Start the frontend:
   ```bash
   cd ./frontend
   npm run dev

### Folder Structure
  ```pgsql
      root
      │
      ├── backend
      │   ├── models
      │   ├── routes
      │   ├── controllers
      │   └── server.js
      │
      ├── frontend
      │   ├── src
      │   │   ├── components
      │   │   ├── pages
      │   │   └── App.js
      │   └── public
      │
      └── README.md
