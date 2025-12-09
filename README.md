# Client and Admin Management System

A full-stack web application for managing clients, projects, contacts, and newsletter subscriptions. This system includes a public-facing homepage to showcase projects and client testimonials, along with an admin dashboard for content management.

## 🌟 Features

### Public Features
- **Projects Showcase**: Display portfolio projects with images and descriptions
- **Client Testimonials**: Show client reviews with designations and photos
- **Contact Form**: Allow visitors to submit contact inquiries
- **Newsletter Subscription**: Enable users to subscribe to newsletters
- **Responsive Design**: Mobile-friendly interface for all devices

### Admin Features
- **Project Management**: Create, read, update, and delete projects
- **Client Management**: Manage client testimonials and reviews
- **Contact Management**: View and manage contact form submissions
- **Newsletter Management**: Track newsletter subscriptions
- **Image Upload**: Upload and manage images for projects and clients

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Easy Crop** - Image cropping functionality

### Backend
- **Node.js** - Runtime environment
- **Express.js 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Radharamangurjar315/Client-and-Admin-Management.git
cd Client-and-Admin-Management
```

### 2. Backend Setup

Navigate to the Backend directory:
```bash
cd Backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the Backend directory:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

Start the backend server:
```bash
npm start
# or for development
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the frontend directory:
```bash
cp .env.example .env
```

Update the `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get a specific client
- `POST /api/clients` - Create a new client
- `PUT /api/clients/:id` - Update a client
- `DELETE /api/clients/:id` - Delete a client

### Contacts
- `GET /api/contacts` - Get all contact submissions
- `GET /api/contacts/:id` - Get a specific contact
- `POST /api/contacts` - Create a new contact submission
- `DELETE /api/contacts/:id` - Delete a contact submission

### Newsletters
- `GET /api/newsletters` - Get all newsletter subscriptions
- `POST /api/newsletters` - Subscribe to newsletter
- `DELETE /api/newsletters/:id` - Remove subscription

### Health Check
- `GET /api/health` - Check backend health status

## 🎯 Usage

### Accessing the Application
1. **Homepage**: Navigate to `http://localhost:5173` to view the public-facing site
2. **Admin Dashboard**: Navigate to `http://localhost:5173/admin` to access the admin panel

### Managing Content (Admin Dashboard)
1. Navigate to the admin dashboard
2. Use the tabs to switch between Projects, Clients, Contacts, and Newsletters
3. Click "Add New" buttons to create new entries
4. Use Edit and Delete buttons to manage existing entries
5. Upload images when creating or updating projects and clients

## 🌐 Deployment

For detailed deployment instructions, please refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deployment Links
- **Backend**: Recommended platforms - Render, Railway, or Vercel
- **Frontend**: Recommended platforms - Vercel or Netlify

## 📁 Project Structure

```
Client-and-Admin-Management/
├── Backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   ├── styles/      # CSS styles
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # Entry point
│   └── package.json
├── DEPLOYMENT.md        # Deployment guide
├── LICENSE             # MIT License
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Radharaman Gurjar**
- GitHub: [@Radharamangurjar315](https://github.com/Radharamangurjar315)

## 🙏 Acknowledgments

- Thanks to all contributors who help improve this project
- Built with modern web technologies and best practices

---

**Note**: This is a portfolio project demonstrating full-stack development skills with React, Node.js, Express, and MongoDB.