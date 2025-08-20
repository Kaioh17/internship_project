# Task Manager - Full Stack Application

A full-stack task management application built with React frontend and Node.js backend.

## Features

- **User Authentication**: JWT-based login and registration
- **Task Management**: Create, read, update, and delete tasks
- **Modern UI**: Material-UI components with responsive design
- **Real-time Updates**: Immediate UI updates after API calls
- **Protected Routes**: Authentication-required access to task management

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing
- CORS enabled

### Frontend
- React 19 with hooks
- Material-UI for components
- React Router for navigation
- Context API for state management
- Responsive design

## Project Structure

```
internship_project/
├── backend/
│   ├── controllers/     # API controllers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # Context providers
│   │   └── services/    # API services
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/task_manager
   JWT_SECRET=your_super_secret_jwt_key_here
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or start the production server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Tasks (Protected Routes)
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Usage

1. **Registration**: Create a new account at `/register`
2. **Login**: Sign in with your credentials at `/login`
3. **Task Management**: 
   - View all your tasks on the main page
   - Add new tasks using the floating action button
   - Edit tasks by clicking the edit icon
   - Mark tasks as complete using the checkbox
   - Delete tasks using the delete icon

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Changes are immediately reflected in the UI
- **Form Validation**: Client-side validation for better UX
- **Error Handling**: Comprehensive error messages and loading states
- **Secure Authentication**: JWT tokens with proper middleware protection

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- User-specific data isolation
- Input validation and sanitization

## Development

### Backend Development
- Uses nodemon for automatic server restart
- Comprehensive error handling
- MongoDB connection with proper error handling
- CORS enabled for frontend communication

### Frontend Development
- Modern React patterns with hooks
- Context API for global state management
- Material-UI for consistent design
- Responsive and accessible components

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**: Ensure MongoDB is running and the connection string is correct
2. **Port Already in Use**: Change the PORT in the .env file or kill the process using the port
3. **CORS Issues**: Backend has CORS enabled, but ensure the frontend URL is correct
4. **JWT Errors**: Check that JWT_SECRET is set in the .env file

### Debug Mode

To enable debug logging, you can add console.log statements or use a logging library like winston.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 