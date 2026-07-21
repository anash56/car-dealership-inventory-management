import request from "supertest";
import app from "../../app.js";

describe("User Registration", () => {
    test("should register a user successfully", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Anash",
                email: "anash@example.com",
                password: "Password123",
            });

        expect(response.statusCode).toBe(201);

        expect(response.body).toEqual({
            message: "User registered successfully",
        });
    });
});