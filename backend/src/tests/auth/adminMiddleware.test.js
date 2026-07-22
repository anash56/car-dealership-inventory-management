import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";

describe("Admin Middleware", () => {
    it("should return 403 for non-admin users", async () => {
        const token = jwt.sign(
            {
                id: "123",
                email: "user@example.com",
                role: "user",
            },
            process.env.JWT_SECRET
        );

        const response = await request(app)
            .delete("/admin-test")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(403);
    });
});