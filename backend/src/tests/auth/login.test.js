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
});