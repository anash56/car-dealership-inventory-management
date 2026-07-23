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

---

## Session 8 - Registration Input Validation (RED → GREEN → REFACTOR)

### User Prompt
Help me implement input validation for user registration using Test-Driven Development (TDD). Follow the Red → Green → Refactor cycle while keeping validation logic inside the service layer.

### AI Assistance
- Explained why input validation is a business rule and should be handled in the service layer.
- Guided the creation of a failing integration test for missing required registration fields.
- Recommended returning `400 Bad Request` when required fields are missing.
- Assisted in implementing validation for the `name`, `email`, and `password` fields.
- Updated the controller to return the appropriate HTTP response for validation failures.
- Reviewed the implementation and confirmed that no additional refactoring was required.

### Outcome
- Added a validation test for user registration.
- Prevented registration when required fields are missing.
- Returned `400 Bad Request` with an appropriate error message.
- Preserved the separation between controller and service layers.
- All tests passed successfully.

---

## Session 9 - Password Hashing (RED → GREEN → REFACTOR)

### User Prompt
Help me implement secure password hashing during user registration using Test-Driven Development (TDD). Explain why password hashing belongs in the service layer and verify it using bcrypt.

### AI Assistance
- Explained the security risks of storing plain text passwords.
- Explained why password hashing is business logic and belongs in the service layer.
- Guided the creation of a failing integration test to verify password hashing.
- Explained how `bcrypt.compare()` verifies hashed passwords.
- Assisted in implementing password hashing using `bcrypt.hash()`.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Passwords are hashed before being stored in MongoDB.
- Plain text passwords are never persisted.
- Registration tests verify hashing using `bcrypt.compare()`.
- All tests passed successfully.

---

## Session 10 - User Login (RED → GREEN → REFACTOR)

### User Prompt
Help me implement the user login endpoint using Test-Driven Development (TDD). Follow the Red → Green → Refactor cycle while keeping authentication logic inside the service layer.

### AI Assistance
- Explained the login flow and authentication architecture.
- Guided the creation of a failing integration test for successful user login.
- Added the login route, controller, and service.
- Implemented user lookup by email.
- Implemented password verification using `bcrypt.compare()`.
- Returned `200 OK` for successful authentication.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Added `POST /api/auth/login`.
- Users can log in with valid email and password.
- Passwords are verified securely using bcrypt.
- All tests passed successfully.

---

## Session 11 - Login with Invalid Email

### User Prompt
Add a test to verify that login fails when the email does not exist.

### AI Assistance
- Added an integration test for login with a non-existent email.
- Verified that the existing implementation already handled this scenario.
- Confirmed that the API returns a generic authentication error to prevent user enumeration.

### Outcome
- Login returns `401 Unauthorized` for unknown email addresses.
- Response message: `Invalid email or password`.
- No production code changes were required.

---

## Session 12 - Login with Incorrect Password

### User Prompt
Add a test to verify that login fails when the password is incorrect.

### AI Assistance
- Added an integration test for login with an incorrect password.
- Verified that the existing implementation already handled this scenario.
- Confirmed that the API returns a generic authentication error to prevent user enumeration.

### Outcome
- Login returns `401 Unauthorized` for incorrect passwords.
- Response message: `Invalid email or password`.
- No production code changes were required.

---

## Session 13 - Login Test Refactoring & Validation

### User Prompt
Refactor the login tests into a single test file and add validation tests for missing email and password.

### AI Assistance
- Consolidated all login scenarios into `login.test.js`.
- Removed the separate `loginInvalidEmail.test.js` file.
- Added integration tests for missing email and missing password.
- Verified that the existing implementation already handled both validation scenarios.
- Confirmed that the API returns `400 Bad Request` with an appropriate validation message for incomplete login requests.

### Outcome
- Improved test organization by keeping all login scenarios in one file.
- Login returns `400 Bad Request` when email or password is missing.
- Response message: `Email and password are required`.
- No production code changes were required.

---

## Session 14 - JWT Token Generation

### User Prompt
Implement JWT token generation for successful user login using Test-Driven Development (TDD).

### AI Assistance
- Added a failing test to verify that successful login returns a JWT token.
- Implemented JWT generation using `jsonwebtoken`.
- Added `JWT_SECRET` configuration through environment variables.
- Updated the login response to include the generated token.
- Ensured the application loads environment variables during testing.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Successful login returns a JWT token.
- Token generation uses `JWT_SECRET` from environment variables.
- Authentication is ready for protected routes.
- All tests passed successfully.

---

## Session 15 - Authentication Middleware (Missing Token)

### User Prompt
Implement authentication middleware using TDD that denies access to protected routes when no JWT token is provided.

### AI Assistance
- Added a failing test for accessing a protected route without an Authorization header.
- Created authentication middleware.
- Checked for the presence of the Authorization header.
- Returned HTTP 401 Unauthorized when the header was missing.
- Confirmed no refactoring was required.

### Outcome
- Protected routes now reject unauthenticated requests.
- Middleware is ready for JWT verification in the next step.

---

## Session 16 - JWT Verification

### User Prompt
Implement JWT verification in the authentication middleware using TDD.

### AI Assistance
- Added a failing test for requests containing an invalid JWT.
- Implemented JWT verification using `jsonwebtoken`.
- Extracted the token from the Authorization header.
- Returned HTTP 401 Unauthorized when verification failed.
- Confirmed no refactoring was required.

### Outcome
- Middleware now verifies JWTs.
- Invalid tokens are rejected with HTTP 401.
- Middleware is ready to accept valid authenticated requests.

---

## Session 17 - Attach Authenticated User

### User Prompt
Enhance the authentication middleware using TDD so that authenticated user information is attached to the request object.

### AI Assistance
- Added a failing test to verify that the decoded JWT payload is attached to `req.user`.
- Updated the authentication middleware to store the decoded JWT payload on the request object.
- Allowed protected routes to access authenticated user information.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Valid JWTs are successfully decoded.
- Authenticated user information is available through `req.user`.
- Protected controllers can identify the currently authenticated user without re-verifying the token.

---

## Session 18 - Admin Authorization Middleware

### User Prompt
Implement admin authorization using TDD so that only users with the `admin` role can access admin-only endpoints.

### AI Assistance
- Added a failing test to verify that non-admin users receive **403 Forbidden** when accessing an admin-only route.
- Added a `role` field to the `User` schema with a default value of `"user"`.
- Included the user's `role` in the JWT payload during login.
- Created an `adminOnly` middleware to authorize requests based on `req.user.role`.
- Protected a temporary `/admin-test` route using both `authenticate` and `adminOnly`.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Every user has a role (`user` or `admin`).
- The authenticated user's role is available through `req.user.role`.
- Non-admin users receive **403 Forbidden** when accessing admin-only endpoints.
- The application is ready to protect admin-only routes such as vehicle deletion and inventory restocking.

---

## Session 19 - Create Vehicle

### User Prompt
Implement the vehicle creation endpoint using TDD so that authenticated users can create a new vehicle.

### AI Assistance
- Added a failing test to verify that an authenticated user can create a vehicle.
- Created the `Vehicle` model with the required fields: make, model, category, price, and quantity in stock.
- Implemented the vehicle creation service to persist vehicle data.
- Created the vehicle controller to handle incoming requests and return the created vehicle.
- Added the protected `POST /api/vehicles` route using the `authenticate` middleware.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can successfully create vehicles.
- Vehicle information is stored in MongoDB.
- The API returns **201 Created** along with the newly created vehicle.
- The application is ready for vehicle retrieval, search, update, and deletion features.

---

## Session 20 - Get All Vehicles

### User Prompt
Implement the vehicle retrieval endpoint using TDD so that authenticated users can retrieve all vehicles.

### AI Assistance
- Added a failing test to verify that authenticated users can retrieve all vehicles.
- Implemented the vehicle retrieval service using `Vehicle.find()` with deterministic sorting.
- Created the vehicle retrieval controller.
- Added the protected `GET /api/vehicles` route using the `authenticate` middleware.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can retrieve all vehicles.
- Vehicles are returned in a consistent order.
- The API returns **200 OK** with the list of vehicles.
- The application is ready for vehicle search, update, and deletion features.

---

## Session 21 - Search Vehicles by Make

### User Prompt
Implement the vehicle search endpoint using TDD so that authenticated users can search vehicles by make.

### AI Assistance
- Added a failing test to verify that authenticated users can search vehicles by make.
- Implemented the vehicle search service using a dynamic MongoDB filter.
- Created the vehicle search controller.
- Added the protected `GET /api/vehicles/search` route using the `authenticate` middleware.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can search vehicles by make.
- Matching vehicles are returned successfully.
- The API returns **200 OK** with the filtered vehicle list.
- The search implementation is ready to be extended for model, category, and price range.

---

## Session 22 - Search Vehicles by Model

### User Prompt
Extend the vehicle search endpoint using TDD so that authenticated users can search vehicles by model.

### AI Assistance
- Added a failing test to verify that authenticated users can search vehicles by model.
- Extended the dynamic MongoDB filter to support the `model` query parameter.
- Reused the existing search service, controller, and route.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can search vehicles by model.
- Matching vehicles are returned successfully.
- The API returns **200 OK** with the filtered vehicle list.
- The search implementation is ready to support category and price range.

---

## Session 23 - Search Vehicles by Category

### User Prompt
Extend the vehicle search endpoint using TDD so that authenticated users can search vehicles by category.

### AI Assistance
- Added a failing test to verify that authenticated users can search vehicles by category.
- Extended the dynamic MongoDB filter to support the `category` query parameter.
- Reused the existing search service, controller, and route.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can search vehicles by category.
- Matching vehicles are returned successfully.
- The API returns **200 OK** with the filtered vehicle list.

---

## Session 24 - Search Vehicles by Price Range

### User Prompt
Extend the vehicle search endpoint using TDD so that authenticated users can search vehicles by price range.

### AI Assistance
- Added a failing test to verify that authenticated users can search vehicles within a specified price range.
- Extended the dynamic MongoDB filter to support `minPrice` and `maxPrice` query parameters.
- Converted query parameters to numbers before filtering.
- Reused the existing search service, controller, and route.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can search vehicles within a specified price range.
- Matching vehicles are returned successfully.
- The API returns **200 OK** with the filtered vehicle list.
- The search endpoint now fully supports searching by make, model, category, and price range.

---

## Session 25 - Update Vehicle

### User Prompt
Implement the protected vehicle update endpoint using TDD so that authenticated users can update a vehicle's details.

### AI Assistance
- Added a failing integration test to verify that authenticated users can update a vehicle.
- Implemented the protected `PUT /api/vehicles/:id` endpoint using the `authenticate` middleware.
- Implemented the `updateVehicleController`.
- Implemented the `updateVehicle` service using `findByIdAndUpdate()`.
- Used `{ new: true }` to return the updated vehicle document.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can successfully update a vehicle's details.
- Updated vehicles are returned successfully.
- The API returns **200 OK** with the updated vehicle.

---

## Session 26 - Update Vehicle Not Found

### User Prompt
Extend the vehicle update endpoint using TDD so that updating a non-existent vehicle returns **404 Not Found**.

### AI Assistance
- Added a failing integration test to verify that updating a non-existent vehicle returns **404 Not Found**.
- Updated the `updateVehicle` service to throw an error when the requested vehicle does not exist.
- Updated the `updateVehicleController` to return **404 Not Found** for missing vehicles while continuing to return **500 Internal Server Error** for unexpected errors.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Requests to update a non-existent vehicle return **404 Not Found**.
- Existing vehicles continue to update successfully.
- The API now correctly handles both successful updates and missing vehicle scenarios.

---

## Session 26 - Delete Vehicle

### User Prompt
Implement the protected, admin-only vehicle deletion endpoint using TDD so that an administrator can delete a vehicle from the inventory.

### AI Assistance
- Added a failing integration test to verify that an authenticated administrator can delete a vehicle.
- Verified that the vehicle is actually removed from the database after deletion.
- Promoted the test user to an administrator directly in the test database to satisfy the admin authorization requirement without weakening the registration flow.
- Implemented the protected `DELETE /api/vehicles/:id` endpoint using the `authenticate` and `adminOnly` middlewares.
- Implemented the `deleteVehicleController`.
- Implemented the `deleteVehicle` service using `findByIdAndDelete()`.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Administrators can successfully delete existing vehicles.
- Deleted vehicles are permanently removed from the database.
- The API returns **200 OK** with a success message after a successful deletion.
- The endpoint is protected so that only authenticated administrators can perform vehicle deletion.

---

## Session 27 - Delete Vehicle Not Found Handling

### User Prompt
Enhance the vehicle deletion endpoint using TDD so that attempting to delete a non-existent vehicle returns **404 Not Found** instead of **500 Internal Server Error**.

### AI Assistance
- Added a failing integration test to verify that deleting a non-existent vehicle returns **404 Not Found**.
- Used a valid but non-existent MongoDB `ObjectId` to test the not-found scenario.
- Updated the `deleteVehicle` service to throw an error when the requested vehicle does not exist.
- Updated the `deleteVehicleController` to return **404 Not Found** for missing vehicles while continuing to return **500 Internal Server Error** for unexpected errors.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Requests to delete a non-existent vehicle now return **404 Not Found**.
- Existing vehicle deletions continue to return **200 OK**.
- Unexpected server errors continue to return **500 Internal Server Error**.

---

## Session 28 - Purchase Vehicle

### User Prompt
Implement the protected vehicle purchase endpoint using TDD so that an authenticated user can purchase a vehicle, decreasing its quantity in stock.

### AI Assistance
- Added a failing integration test to verify that an authenticated user can purchase a vehicle.
- Verified that the vehicle quantity is updated both in the API response and in the database.
- Implemented the protected `POST /api/vehicles/:id/purchase` endpoint using the `authenticate` middleware.
- Implemented the `purchaseVehicleController`.
- Implemented the `purchaseVehicle` service by retrieving the vehicle, decreasing `quantityInStock` by one, saving the updated document, and returning the updated vehicle.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Authenticated users can successfully purchase a vehicle.
- The vehicle's `quantityInStock` decreases by one after a successful purchase.
- The updated vehicle is returned in the response.
- The updated quantity is successfully persisted in the database.

---

## Session 29 - Purchase Vehicle (Vehicle Not Found)

### User Prompt
Implement the purchase vehicle endpoint using TDD so that attempting to purchase a non-existent vehicle returns a 404 Not Found response.

### AI Assistance
- Added a failing integration test to verify that purchasing a non-existent vehicle returns a 404 response.
- Updated the `purchaseVehicle` service to check whether the requested vehicle exists before updating its inventory.
- Threw a `Vehicle not found` error when the vehicle was not found.
- Updated the `purchaseVehicleController` to return a `404 Not Found` response when the service throws a `Vehicle not found` error.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- The purchase endpoint now returns `404 Not Found` when the requested vehicle does not exist.
- Existing purchase functionality continues to work correctly for valid vehicles.
- The project maintains consistent error handling across the Update, Delete, and Purchase endpoints.

---

## Session 30 - Purchase Vehicle (Out of Stock)

### User Prompt
Implement the purchase vehicle endpoint using TDD so that purchasing a vehicle with no available stock returns a 400 Bad Request response.

### AI Assistance
- Added a failing integration test to verify that purchasing a vehicle with zero stock returns a `400 Bad Request` response.
- Updated the `purchaseVehicle` service to validate the vehicle's available stock before processing the purchase.
- Threw a `Vehicle is out of stock` error when the vehicle's `quantityInStock` was zero or less.
- Updated the `purchaseVehicleController` to return a `400 Bad Request` response when the service throws a `Vehicle is out of stock` error.
- Verified that the vehicle quantity remains unchanged when a purchase request is rejected.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- The purchase endpoint now prevents users from purchasing vehicles that are out of stock.
- The API returns `400 Bad Request` with an appropriate error message when inventory is unavailable.
- Vehicle inventory remains unchanged after a failed purchase attempt.
- Purchase functionality now correctly handles success, vehicle not found, and out-of-stock scenarios.

---

## Session 31 - Restock Vehicle

### User Prompt
Implement the admin-only vehicle restock endpoint using TDD so that an administrator can restock a vehicle by increasing its quantity in stock.

### AI Assistance
- Added a failing integration test to verify that an administrator can successfully restock a vehicle.
- Implemented the protected `POST /api/vehicles/:id/restock` endpoint using the `authenticate` and `adminOnly` middleware.
- Implemented the `restockVehicleController`.
- Implemented the `restockVehicle` service by retrieving the vehicle, increasing `quantityInStock` by one, saving the updated document, and returning the updated vehicle.
- Reviewed the implementation and confirmed no refactoring was required.

### Outcome
- Administrators can successfully restock a vehicle.
- The vehicle's `quantityInStock` increases by one after a successful restock.
- The updated vehicle is returned in the response.
- The updated quantity is successfully persisted in the database.