import request from "supertest";
import app from "../../app.js";
import jwt from "jsonwebtoken";

describe("Authentication Middleware", () => {
    it("should return 401 when no token is provided", async () => {
        const response = await request(app).get("/protected");

        expect(response.status).toBe(401);
    });

    it("should return 401 when an invalid token is provided", async () => {
        const response = await request(app)
            .get("/protected")
            .set("Authorization", "Bearer invalid-token");

        expect(response.status).toBe(401);
    });

    it("should attach the decoded user to the request", async () => {
        const payload = {
            id: "123",
            email: "anash@example.com",
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        const response = await request(app)
            .get("/protected")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.user.id).toBe(payload.id);
        expect(response.body.user.email).toBe(payload.email);
    });
});