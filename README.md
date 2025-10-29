# MindBridge
A Digital Mental Health Companion App that provides free or low-cost access to therapy, mood tracking, and journaling.  It connects users with volunteer therapists from NGOs and mental health organizations offering pro bono or subsidized sessions.

# MindBridge API - Phase 1

## Overview
Digital Mental Health Companion App - User Authentication System

## Features 
- User Registration & Login
- JWT Authentication  
- Password Hashing
- MySQL Database

## Tech Stack
- Node.js, Express, MySQL, Sequelize, JWT, bcrypt,dotenv,nodemon,helmet

## API Endpoints

### Register User route/endpoint
**POST** `http://localhost:3000/api/v1/auth/register`


### Login User  routes/endpoint
**POST** `http://localhost:3000/api/v1/auth/login`


## Setup

### 1. Install & Configure
```bash
npm install
```

### 2. Environment (.env)
```env
DB_HOST=localhost
DB_NAME=mindBridge
DB_USER=root
DB_PASSWORD=your_password
DB_PORT=3306
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 3. Database Setup
Database and tables are created automatically when server starts and checked using mysql workbench.

### 4. Start Server
```bash
npm run start
```

## Testing
Use Postman to test the endpoints above.
