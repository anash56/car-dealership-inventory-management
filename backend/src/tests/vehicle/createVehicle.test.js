import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";

describe("Create Vehicle", () => {
    it("should create a vehicle for an authenticated user", async () => {
        const token = jwt.sign(
            {
                id: "123",
                email: "user@example.com",
                role: "user",
            },
            process.env.JWT_SECRET
        );

        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${token}`)
            .send({
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantityInStock: 5,
            });

        expect(response.status).toBe(201);
        expect(response.body.vehicle.make).toBe("Toyota");
        expect(response.body.vehicle.model).toBe("Fortuner");
        expect(response.body.vehicle.category).toBe("SUV");
        expect(response.body.vehicle.price).toBe(4500000);
        expect(response.body.vehicle.quantityInStock).toBe(5);
    });
});