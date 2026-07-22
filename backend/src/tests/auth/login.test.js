import request from "supertest";
import app from "../../app.js";

describe("User Login", () => {
    it("should login successfully with valid credentials", async () => {
        const user = {
            name: "Anash",
            email: "anash@gmail.com",
            password: "123456",
        };

        // Register first
        await request(app)
            .post("/api/auth/register")
            .send(user);

        // Login
        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: user.email,
                password: user.password,
            });

        expect(response.status).toBe(200);
    });

    it("should return 401 when email does not exist", async () => {
        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "unknown@gmail.com",
                password: "123456",
            });

        expect(response.status).toBe(401);

        expect(response.body).toEqual({
            message: "Invalid email or password",
        });
    });

    it("should return 401 when password is incorrect", async () => {
        const user = {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
        };

        await request(app)
            .post("/api/auth/register")
            .send(user);

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: user.email,
                password: "wrongpassword",
            });

        expect(response.status).toBe(401);

        expect(response.body).toEqual({
            message: "Invalid email or password",
        });
    });

    it("should return 400 when email is missing", async () => {
        const response = await request(app)
            .post("/api/auth/login")
            .send({
                password: "password123",
            });

        expect(response.status).toBe(400);

        expect(response.body).toEqual({
            message: "Email and password are required",
        });
    });

    it("should return 400 when password is missing", async () => {
        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "john@example.com",
            });

        expect(response.status).toBe(400);

        expect(response.body).toEqual({
            message: "Email and password are required",
        });
    });

    it("should return a JWT token after successful login", async () => {
        const user = {
            name: "Anash",
            email: "anash@gmail.com",
            password: "123456",
        };

        await request(app)
            .post("/api/auth/register")
            .send(user);

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: user.email,
                password: user.password,
            });

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty("token");
        expect(typeof response.body.token).toBe("string");
    });
});