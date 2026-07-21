import request from "supertest";
import app from "../app.js";

describe("App", () => {
    test("GET / should return API status message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            message: "Car Dealership Inventory API is running",
        });
    });
});