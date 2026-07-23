# Car Dealership Inventory Management

## Project Overview

This is a **full‑stack web application** that lets a car dealership manage its vehicle inventory. Users can:
- **Add** new vehicles
- **View** a list of available vehicles
- **Search** and **filter** the inventory
- **Update** vehicle details
- **Purchase** a vehicle (marks it as sold)

The project consists of:
- **Backend** – Node.js, Express, MongoDB, Mongoose
- **Frontend** – Vite + React, vanilla CSS with a modern UI
- **Authentication** – JWT based auth with role‑based access (admin vs regular user)

---



## Getting Started

### Prerequisites
- **Node.js** (v18 or later) – https://nodejs.org/
- **npm** (comes with Node) or **yarn**
- **MongoDB** (local instance or Atlas) – make sure a MongoDB server is reachable at `mongodb://localhost:27017/car_dealership` (or adjust `.env`)

### Clone the repository
```bash
git clone https://github.com/anash56/car-dealership-inventory-management.git
cd car-dealership-inventory-management
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `.env` file (copy from `.env.example` if present) and set at least the following:
   ```dotenv
   MONGO_URI=mongodb://localhost:27017/car_dealership
   JWT_SECRET=your_secret_key_here
   PORT=5000
   ```
4. (Optional) Seed the database with sample vehicles:
   ```bash
   node src/seed/seed.js
   ```
5. Run the backend in development mode:
   ```bash
   npm run dev
   ```
   The API will be available at **http://localhost:5000**.

### Frontend Setup
1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the frontend development server:
    ```bash
    npm run dev
    ```

### Running Tests
- Backend tests (Jest):
  ```bash
  cd ../backend
  npm test
  ```
- Frontend tests (if any) can be added with your preferred framework (e.g., Vitest, Jest).

---

## My AI Usage

### AI Tool Used

During the development of this project, I used **ChatGPT (OpenAI)** as my primary AI assistant.

### How I Used AI

I used ChatGPT throughout both the backend and frontend development process for learning, implementation guidance, debugging, and documentation. Specifically, I used it to:

* Understand and implement the Express.js project architecture using Routes, Controllers, Services, and Models.
* Learn and implement JWT-based authentication and role-based authorization.
* Understand MongoDB and Mongoose concepts, including schema design and database operations.
* Follow a Test-Driven Development (TDD) workflow by designing integration tests before implementing features.
* Review edge cases for authentication and vehicle management features such as duplicate registration, invalid login, vehicle not found, out-of-stock purchases, and admin-only operations.
* Debug backend issues by understanding error messages and identifying possible solutions.
* Learn Git and GitHub workflows, including commit organization and version control practices.
* Assist with React frontend development by explaining component structure, routing, API integration using Axios, authentication flow, and protected routes.
* Prepare project documentation, testing reports, and development notes.

ChatGPT was primarily used as a learning and development assistant rather than simply generating code. I frequently asked for explanations of implementation choices so that I could understand the reasoning before integrating any solution into the project.

### Reflection

Using ChatGPT significantly improved my development workflow. It helped me understand unfamiliar concepts more quickly, identify bugs efficiently, and follow a structured development process using Test-Driven Development. The explanations provided by ChatGPT improved my understanding of backend architecture, authentication, testing, and frontend integration instead of only providing code.

Although AI accelerated learning and problem-solving, I reviewed, tested, and integrated all code myself. Every feature was validated through testing before being accepted into the project, and all final implementation decisions were made by me.


