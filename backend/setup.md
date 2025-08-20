# Backend Environment Setup

## Required Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/task_manager
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
```

## Environment Variables Explanation

- **MONGO_URI**: MongoDB connection string
  - Default: `mongodb://localhost:27017/task_manager`
  - Change this if you're using a different MongoDB instance or database name

- **JWT_SECRET**: Secret key for JWT token signing
  - **IMPORTANT**: Use a strong, unique secret key in production
  - Example: `JWT_SECRET=my_super_secret_key_12345_abcdef`

- **PORT**: Server port number
  - Default: `5000`
  - Change this if port 5000 is already in use

## Setup Steps

1. Create the `.env` file in the backend directory
2. Copy the template above
3. Replace the placeholder values with your actual configuration
4. Save the file
5. Restart your backend server

## Security Notes

- Never commit the `.env` file to version control
- Use strong, unique JWT secrets in production
- Consider using environment-specific configurations for different deployment environments 