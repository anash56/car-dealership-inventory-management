import request from "supertest";
import app from "../../app.js";

describe("User Login - Invalid Email", () => {
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
});