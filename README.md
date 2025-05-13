## Project Description
This is an Employee Management System consisting of a backend server and a frontend client application. The backend is built with Node.js and Express, providing RESTful API endpoints. The frontend is built with React for managing employee data and user interactions.

---

## Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node package manager)
- Git

---

## Installation

### Clone the repository
```bash
git clone https://github.com/McDonald129/Employee-Management-System.git
cd Employee-Management-System
```

### Backend Setup (Server)
1. Navigate to the `Server` directory:
   ```bash
   cd Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables if needed (e.g., database connection strings). Create a `.env` file in the `Server` directory if required.

### Frontend Setup (Client)
1. Navigate to the `Client` directory:
   ```bash
   cd ../Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

### Start the Backend Server
From the `Server` directory, run:
```bash
npm start
```
This will start the backend server (default port usually 5000 or as configured).

### Start the Frontend Client
From the `Client` directory, run:
```bash
npm start
```
This will start the React development server (default port usually 3000).

---

## Testing the Application

### Backend API Testing
- Use tools like Postman or Curl to test the API endpoints.
- Test all primary endpoints including authentication, employee management, and admin routes.
- Verify happy paths, error handling, and edge cases.

### Frontend UI Testing
- Navigate through all pages and components.
- Test login, employee CRUD operations, and any other user interactions.
- Verify form validations and UI responsiveness.

---

## Additional Notes
- Ensure the backend server is running before starting the frontend client to enable API communication.
- If you encounter any issues with merging or pushing to the GitHub repository, refer to the Git commands and troubleshooting steps provided in the project documentation or contact the maintainer.

---

## Contact
For any questions or support, please contact the project maintainer.
