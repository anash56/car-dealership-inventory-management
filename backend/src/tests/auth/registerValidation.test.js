import request from "supertest";
import app from "../../app.js";

describe("User Registration - Validation", () => {
    it("should reject registration when required fields are missing", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Anash",
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
            "Name, email and password are required"
        );
    });
});