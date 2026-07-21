# PROMPTS.md

## Session 1 - Backend Project Setup

### User Prompt
Help me set up the backend for a Car Dealership Inventory Management System using Node.js, Express, and MongoDB. Follow industry best practices and a clean project structure.

### AI Assistance
- Suggested the backend folder structure.
- Helped configure the Express application.
- Explained the separation of `app.js` and `server.js`.
- Explained the purpose of Express middleware.
- Suggested Git commit message conventions.

### Outcome
- Backend project initialized.
- Express application configured.
- Clean project structure established.

---

## Session 2 - Testing Infrastructure

### User Prompt
Help me configure Jest and Supertest for an Express project using ES Modules. I want to follow Test-Driven Development (TDD) for this assessment.

### AI Assistance
- Explained how to configure Jest with ES Modules.
- Recommended the required development dependencies.
- Suggested the Jest test scripts in `package.json`.
- Helped create the initial smoke test using Supertest.
- Assisted in debugging the Jest configuration until the tests passed.

### Outcome
- Jest configured successfully.
- Supertest integrated.
- Initial smoke test passing.
- Project ready to begin TDD.

---

## Session 3 - User Registration (RED)

### User Prompt
Help me start implementing the user registration feature using Test-Driven Development (TDD). I want to follow the Red → Green → Refactor cycle correctly.

### AI Assistance
- Explained the TDD workflow for implementing the registration feature.
- Identified the first behavior to implement: successful user registration.
- Helped write the initial failing test for the `POST /api/auth/register` endpoint.
- Explained why the test should fail with a `404 Not Found` response before any implementation exists.
- Recommended committing the failing test separately to clearly demonstrate the Red phase.

### Outcome
- Created the first registration test.
- Verified the test fails with `404 Not Found`.
- Completed the **Red** phase of the first TDD cycle.
- Ready to begin the **Green** phase.