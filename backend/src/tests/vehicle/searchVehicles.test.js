import request from "supertest";
import jwt from "jsonwebtoken";
import Vehicle from "../../models/Vehicle.js";
import app from "../../app.js";

describe("Search Vehicles", () => {
    it("should return vehicles matching the search criteria", async () => {
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
            .get("/api/vehicles/search")
            .query({ make: "Toyota" })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.vehicles).toHaveLength(1);
        expect(response.body.vehicles[0].make).toBe("Toyota");
    });

    it("should return vehicles matching the model", async () => {
        await Vehicle.create([
            {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantityInStock: 5,
            },
            {
                make: "Toyota",
                model: "Innova",
                category: "MPV",
                price: 3000000,
                quantityInStock: 4,
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
            .get("/api/vehicles/search")
            .query({ model: "Fortuner" })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.vehicles).toHaveLength(1);
        expect(response.body.vehicles[0].model).toBe("Fortuner");
    });

    it("should return vehicles matching the category", async () => {
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
            .get("/api/vehicles/search")
            .query({ category: "SUV" })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.vehicles).toHaveLength(1);
        expect(response.body.vehicles[0].category).toBe("SUV");
    });

    it("should return vehicles within the price range", async () => {
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
            {
                make: "BMW",
                model: "X5",
                category: "SUV",
                price: 8000000,
                quantityInStock: 2,
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
            .get("/api/vehicles/search")
            .query({
                minPrice: 2000000,
                maxPrice: 5000000,
            })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.vehicles).toHaveLength(1);
        expect(response.body.vehicles[0].make).toBe("Toyota");
    });
});