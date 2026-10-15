# Zerodha Clone — Stock Trading Dashboard

A full-stack web application inspired by Zerodha, built to practice modern web development, dashboard design, API integration, authentication, and database operations.

## Live Demo

**Live Application:** [https://zerodha-vishal.netlify.app/](https://zerodha-vishal.netlify.app/)

**GitHub Repository:** [Zerodha-Clone](https://github.com/Vishal-R194/Zerodha-Clone)

---

## Overview

Zerodha Clone is a learning project inspired by the interface and dashboard experience of a stock trading platform. It combines React-based user interfaces with a Node.js and Express backend and MongoDB for data storage.

The project is organized into three main parts:

- **Frontend:** The main user-facing application.
- **Dashboard:** A dashboard interface with reusable UI components and chart visualizations.
- **Backend:** Server-side APIs, authentication, and database integration.

## Features

- React-based user interface
- Dashboard components built with Material UI
- Data visualization using Chart.js
- Client-side navigation using React Router
- API communication using Axios
- Backend API development with Node.js and Express
- MongoDB integration using Mongoose
- Authentication-related implementation using JWT, bcryptjs, and Passport, where configured
- Deployed frontend accessible through a live demo

*Document only the features that are implemented and working in your application.*

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, React Router, Axios |
| Dashboard | React.js, Material UI, Chart.js, React Chart.js 2 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs, Passport.js |
| Testing | React Testing Library |
| Deployment | Netlify for the deployed frontend |
| Version Control | Git, GitHub |


### Architecture Components

**1. Frontend — React.js**
- Renders the user interface.
- Manages page navigation using React Router.
- Sends HTTP requests through Axios.
- Displays application data and responses.

**2. Dashboard — React.js**
- Provides dashboard-oriented interfaces.
- Uses Material UI components and icons.
- Uses Chart.js and React Chart.js 2 for data visualization.

**3. Backend — Node.js and Express.js**
- Handles incoming HTTP requests.
- Provides API endpoints for supported application features.
- Integrates with MongoDB through Mongoose.
- Uses authentication and authorization middleware where configured.

**4. Authentication**
- JWT can be used to represent an authenticated session.
- bcryptjs can be used to hash passwords.
- Passport.js and Passport Local can support local authentication.

**5. Database — MongoDB**
- Stores application data according to the configured Mongoose models.
- Supports database operations performed by the backend.

### Typical Request Flow

1. The user interacts with the frontend or dashboard.
2. The React application sends a request using Axios.
3. The Express backend receives the request.
4. Authentication middleware checks protected requests, where applicable.
5. The backend performs the required database operation through Mongoose.
6. The backend returns a response to the client.
7. The React application updates the interface.

---

## Project Structure

The project contains three main applications. The following is a conceptual structure; adjust it to match your actual repository.

```text
Zerodha-Clone/
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project locally:

- Node.js and npm
- MongoDB instance or MongoDB Atlas connection
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Vishal-R194/Zerodha-Clone.git
cd Zerodha-Clone
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm start
```

The React development server typically runs at `http://localhost:3000`.

### 3. Install Dashboard Dependencies

Open another terminal:

```bash
cd dashboard
npm install
npm start
```

The dashboard may use a different port if the default port is already occupied.

### 4. Configure and Start the Backend

Open another terminal:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and configure the environment variables required by your code. For example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
PORT=5000
```

These are example variable names. Use the exact names expected by your backend code, and never commit real credentials.

Start the backend:

```bash
npm start
```

The backend entry point is `index.js`. Confirm the actual port from your server configuration.

### 5. Configure API Connections

Ensure the frontend and dashboard send requests to the correct backend API URL. If the backend is running locally, use the configured local server address. For deployment, configure the production API URL and any required CORS settings.

---

## Environment Variables and Security

- Keep database credentials and secret keys in environment variables.
- Do not commit `.env` files containing real secrets.
- Use a `.gitignore` file to exclude environment files and dependency folders.
- Hash passwords before storing them.
- Validate incoming API requests.
- Protect private API routes with appropriate authentication and authorization checks.
- Use HTTPS and secure cookie/token handling in production, as appropriate for the authentication design.

## Testing

Run the available frontend tests from each React application directory:

```bash
npm test
```

Create a production build with:

```bash
npm run build
```

The project uses React Testing Library dependencies. Add details about specific test cases once you have verified which tests are implemented.

## Deployment

The frontend is deployed on Netlify.

**Live URL:** [https://zerodha-vishal.netlify.app/](https://zerodha-vishal.netlify.app/)

For a complete deployment, ensure that:
- The frontend is configured with the correct production API URL.
- The backend is deployed and accessible if the application depends on server APIs.
- Environment variables are configured securely on the deployment platform.
- CORS and database access are configured for the production environment.

## Key Learnings

Through this project, I practiced:

- Building interfaces with React.js.
- Organizing frontend code into reusable components.
- Implementing client-side navigation.
- Integrating APIs using Axios.
- Developing server-side APIs with Express.js.
- Connecting a backend to MongoDB using Mongoose.
- Working with authentication-related libraries.
- Creating dashboard visualizations.
- Debugging, testing, and deploying a web application.

## Future Improvements

- Improve responsive layouts and accessibility.
- Add stronger API validation and error handling.
- Expand automated testing.
- Improve loading states and user feedback.
- Add more dashboard visualizations using reliable data sources.
- Strengthen production security and deployment configuration.

## Author

**Vishal Kumar**

- GitHub: [Vishal-R194](https://github.com/Vishal-R194)

---

*This is an independent educational project inspired by a stock trading platform. It is not an official Zerodha product and is not intended to provide financial advice.*
