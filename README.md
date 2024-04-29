

```markdown
# Authentication APIs using Express and MongoDB

This project provides a set of RESTful APIs for user authentication using Express.js and MongoDB as the database. It includes features like user registration, login, logout, fetching user details, and protected routes using JWT tokens.

## Features

1. User Registration: Allows users to register by providing their name, email, and password. It checks if the user already exists before creating a new account.

2. User Login: Users can log in using their registered email and password. It verifies the credentials and issues a JWT token upon successful authentication.

3. User Logout: Provides an endpoint to log out the currently authenticated user by clearing the JWT token.

4. User Details: Allows authenticated users to fetch their details securely through protected routes.

5. Protected Routes: Uses authentication middleware to protect certain routes, ensuring that only authenticated users can access them.

## Technologies Used

- Express.js: Web framework for Node.js
- MongoDB: Document-oriented NoSQL database
- JSON Web Tokens (JWT): Used for secure authentication
- Bcrypt: Library for hashing passwords securely
- Dotenv: For managing environment variables
- Nodemon: Development tool for auto-restarting the server

## Project Structure

- **`/authentication`**: Contains middleware for user authentication.
- **`/controllers`**: Contains controller functions for handling user requests.
- **`/models`**: Defines MongoDB schemas and models for user data.
- **`/routes`**: Defines API endpoints and routes for user authentication.
- **`/utils`**: Contains utility functions for error handling and async operations.
- **`server.js`**: Entry point of the application.
- **`package.json`**: File containing project metadata and dependencies.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Aniket-001/SkyGoal.git
   ```

2. Install dependencies:

   ```bash
   cd <project-folder>
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=<port-number-for-the-site>
   DB_URL=<mongodb-connection-url>
   SECRET_KEY=<your-secret-key>
   EXPIRES_IN=<token-expiry-time-in-days>
   ```

4. Run the server:

   ```bash
   npm start
   ```

## API Endpoints

- `POST /signup`: Register a new user.
- `POST /login`: Log in with existing credentials.
- `GET /logout`: Log out the current user.
- `GET /userdetail`: Fetch details of the authenticated user.

## API Testing

  We will be using postman fro API testing

- `POST /signup`

  ![image](https://github.com/Aniket-001/SkyGoal/assets/77916146/d604b190-7bb2-464e-9284-25263f2a8f84)

- `POST /login`
  
  ![image](https://github.com/Aniket-001/SkyGoal/assets/77916146/2eccd20d-8bc7-455b-87cc-bb655a3389a3)
  
- `GET /logout`

  ![image](https://github.com/Aniket-001/SkyGoal/assets/77916146/a393e68a-1219-4244-8a0b-36208aeeab73)

- `GET /userdetail`

  ![image](https://github.com/Aniket-001/SkyGoal/assets/77916146/8d6aeae7-f46e-4540-8d8f-1be5b507dbc2)


## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

```

Feel free to customize it further based on your specific project requirements or preferences!

