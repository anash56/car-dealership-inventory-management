import request from "supertest";
import app from "../../app.js";

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
});