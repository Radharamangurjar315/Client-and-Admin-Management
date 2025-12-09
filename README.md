A full-stack MERN application featuring a public landing page and a secure admin panel to manage projects, clients, contact form entries, and newsletter subscribers.

🌐 Live Demo
Frontend (Vercel)

🔗 https://client-and-admin-management.vercel.app/

Backend (Render)

🔗 https://client-and-admin-management.onrender.com/api/health

📘 About the Project

This application consists of two major modules:

1️⃣ Landing Page (Public)

Displays Projects fetched from backend

Displays Happy Clients

Includes a Contact Form

Supports Newsletter Subscription

Fully responsive design

2️⃣ Admin Panel

Add new Projects

Add new Clients

View Contact Form Submissions

View Newsletter Subscribers

This project follows the specifications from the Flipr Full-Stack Development Task.

✨ Features
🌍 Landing Page

Dynamic data loading from backend

Contact form with full validation

Newsletter email subscription

Elegant and responsive UI

🛠 Admin Panel

CRUD operations for Projects & Clients

View + manage contact responses

View newsletter signups

Image upload support (optional cropping)

🛡 Tech Stack
Frontend

React + Vite

Axios

React Router

TailwindCSS / Custom CSS

Backend

Node.js + Express

MongoDB Atlas + Mongoose

Multer (image upload)

CORS + dotenv

Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

📁 Folder Structure
root/
 ├── client/            # React Frontend
 ├── server/            # Express Backend
 │    ├── routes/
 │    ├── controllers/
 │    ├── models/
 │    ├── uploads/
 │    └── server.js
 └── README.md

🔗 API Endpoints
Projects

GET /api/projects → Get all projects

POST /api/projects → Add project

Clients

GET /api/clients

POST /api/clients

Contact Form

POST /api/contacts

GET /api/contacts

Newsletter

POST /api/newsletters

GET /api/newsletters

Health Check

GET /api/health

🔧 Environment Variables
Frontend (client/.env)
VITE_API_URL=https://client-and-admin-management.onrender.com/api

Backend (server/.env)
MONGO_URI=<your-mongodb-uri>
PORT=5000
CLIENT_URL=https://client-and-admin-management.vercel.app

🛠 Setup Instructions
Backend
cd server
npm install
npm start

Frontend
cd client
npm install
npm run dev

☁️ Deployment Notes
Frontend (Vercel)

Build Command: npm run build

Output Directory: dist

Add VITE_API_URL env variable

Backend (Render)

Start Command: node server.js

Add env variables:

MONGO_URI

PORT

CLIENT_URL

CORS must include Vercel domain
