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

    it("should return 400 Bad Request when required fields are missing", async () => {
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
                // missing make, price, quantityInStock
                model: "Fortuner",
                category: "SUV",
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Make, model, category, price, and quantity in stock are required");
    });

    it("should return 400 Bad Request when price is negative or invalid", async () => {
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
                price: -100, // negative price
                quantityInStock: 5,
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Price must be a positive number");
    });

    it("should return 400 Bad Request when quantityInStock is negative or invalid", async () => {
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
                quantityInStock: -5, // negative stock
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Quantity in stock must be a non-negative integer");
    });
});