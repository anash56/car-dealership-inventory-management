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
});