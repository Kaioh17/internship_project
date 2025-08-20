# Quick Start Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB running locally
- npm or yarn

## Quick Setup

### 1. Backend Setup
```bash
cd backend
npm install
# Create .env file (see backend/setup.md)
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## First Time Setup

1. **Start MongoDB** (if not running)
2. **Create backend .env file** with your configuration
3. **Start backend server** - should see "MongoDB connected ✅"
4. **Start frontend** - should open in browser automatically
5. **Register a new account** at /register
6. **Login** and start managing tasks!

## Default Routes
- `/` → Redirects to `/tasks`
- `/register` → User registration
- `/login` → User login
- `/tasks` → Task management (protected)

## Troubleshooting
- Check MongoDB is running
- Verify .env file exists and has correct values
- Check console for error messages
- Ensure ports 3000 and 5000 are available 