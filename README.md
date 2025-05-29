# Employee Feedback Portal

Welcome to the **Employee Feedback Portal**! This web application allows employees to submit feedback, and administrators can manage the feedback (including adding, updating, filtering, and verifying feedback). It is built with a **React** frontend and **Node.js with Express and TypeScript** backend. This guide will walk you through setting up and running the project.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Auth Routes](#auth-routes)
  - [Employee Feedback Routes](#employee-feedback-routes)
  - [Admin Operations](#admin-operations)

---

## Technologies Used

- **Frontend**: React (Typescript), HTML, CSS, JSX
- **Backend**: Node.js, Express, TypeScript
- **Database**: MySQL (via TYPE ORM)
- **Authentication**: JWT (JSON Web Tokens)

---

## Project Setup

### Backend Setup (Node.js with Express)

1. **Clone the Repository**:

   First, clone the repository and navigate into the project folder.

   ```bash
   git clone https://github.com/shanimaurya1913/EmployeeFeedbackPortalBackend.git
   cd EmployeeFeedbackPortalBackend
   ```

## Install Dependencies:
  ```bash
    cd backend
    npm install
  ```

## Set up Environment Variables:
  PORT=5000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=Shani@123
DB_NAME=employeefeedbackportal

# JWT Secret for authentication
JWT_SECRET=yourSuperSecretKey

## Run the Backend
npm run dev

## Admin Register
  ```
    curl --location 'http://localhost:5000/api/auth/register' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "Admin Name", 
        "email": "admin@example.com", 
        "password": "adminPassword123"
    }'
  ```


