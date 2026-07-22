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

---

## Session 4 - User Registration (GREEN)

### User Prompt
Help me implement the minimum code required to pass the first user registration test while following the Green phase of TDD.

### AI Assistance
- Explained the objective of the Green phase.
- Guided the implementation of the `POST /api/auth/register` endpoint.
- Recommended implementing only the minimum code required to satisfy the test.
- Ensured the implementation followed the TDD principle of avoiding unnecessary functionality.

### Outcome
- Added the registration endpoint.
- Returned a `201 Created` response with the expected success message.
- All existing tests passed successfully.
- Completed the Green phase of the first TDD cycle.

---

## Session 5 - User Registration (REFACTOR)

### User Prompt
Help me refactor the user registration implementation after completing the Green phase while keeping all tests passing.

### AI Assistance
- Explained the purpose of the Refactor phase in TDD.
- Recommended separating routing from request handling by introducing a controller.
- Guided the extraction of the registration logic into an authentication controller.
- Ensured the application's behavior remained unchanged after refactoring.

### Outcome
- Introduced an authentication controller.
- Simplified the authentication routes.
- Preserved the existing API behavior.
- All tests continued to pass successfully.

---

## Session 6 - User Registration Persistence (RED → GREEN → REFACTOR)

### User Prompt
Help me implement user registration persistence using Test-Driven Development (TDD). Follow the Red → Green → Refactor cycle while maintaining a clean architecture with separate controller and service layers.

### AI Assistance
- Explained why persistence should be implemented as the next registration behavior.
- Guided the creation of a failing integration test to verify that a registered user is stored in MongoDB.
- Assisted in resolving the `mongodb-memory-server` setup issue by switching to an Atlas-backed test database for this assessment.
- Recommended introducing an `AuthService` to keep business logic separate from the controller.
- Guided the implementation of the minimum code required to save a user in MongoDB.
- Reviewed the implementation for possible refactoring and confirmed no further changes were necessary.

### Outcome
- Added a persistence test for user registration.
- Implemented user persistence using the `User` model.
- Introduced the `AuthService` layer.
- Kept the controller focused on handling HTTP requests and responses.
- All tests passed successfully.
- Completed the Red → Green → Refactor cycle for user registration persistence.

---

## Session 7 - Duplicate Email Registration (RED → GREEN → REFACTOR)

### User Prompt
Help me implement duplicate email validation for user registration using Test-Driven Development (TDD). Follow the Red → Green → Refactor cycle while keeping business logic separate from the controller.

### AI Assistance
- Explained why duplicate email validation is a business rule.
- Guided the creation of a failing integration test for duplicate email registration.
- Recommended returning `409 Conflict` for duplicate email requests.
- Assisted in implementing duplicate email validation inside the `AuthService`.
- Guided the controller to return the appropriate HTTP response.
- Reviewed the implementation and confirmed that no additional refactoring was required.

### Outcome
- Added a duplicate email registration test.
- Prevented users from registering with an existing email.
- Returned `409 Conflict` with an appropriate error message.
- Preserved the separation between controller and service layers.
- All tests passed successfully.