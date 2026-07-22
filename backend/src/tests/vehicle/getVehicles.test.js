import request from "supertest";
import jwt from "jsonwebtoken";
import Vehicle from "../../models/Vehicle.js";
import app from "../../app.js";

describe("Get Vehicles", () => {
    it("should return all vehicles for an authenticated user", async () => {
        await Vehicle.create([
            {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantityInStock: 5,
            },
            {
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1500000,
                quantityInStock: 3,
            },
        ]);

        const token = jwt.sign(
            {
                id: "123",
                email: "user@example.com",
                role: "user",
            },
            process.env.JWT_SECRET
        );

        const response = await request(app)
            .get("/api/vehicles")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.vehicles).toHaveLength(2);
        expect(response.body.vehicles[0].make).toBe("Toyota");
        expect(response.body.vehicles[1].make).toBe("Honda");
    });
});