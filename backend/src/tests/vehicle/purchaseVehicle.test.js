import request from "supertest";
import app from "../../app.js";
import Vehicle from "../../models/Vehicle.js";
import mongoose from "mongoose";

it("should purchase a vehicle", async () => {

    const user = {
        name: "John",
        email: "john@example.com",
        password: "password123"
    };

    await request(app)
        .post("/api/auth/register")
        .send(user);

    const loginResponse = await request(app)
        .post("/api/auth/login")
        .send({
            email: user.email,
            password: user.password
        });

    const token = loginResponse.body.token;

    const createResponse = await request(app)
        .post("/api/vehicles")
        .set("Authorization", `Bearer ${token}`)
        .send({
            make: "Toyota",
            model: "Fortuner",
            category: "SUV",
            price: 4500000,
            quantityInStock: 10
        });

    const vehicleId = createResponse.body.vehicle._id;

    const purchaseResponse = await request(app)
        .post(`/api/vehicles/${vehicleId}/purchase`)
        .set("Authorization", `Bearer ${token}`);

    expect(purchaseResponse.status).toBe(200);
    expect(purchaseResponse.body.vehicle.quantityInStock).toBe(9);

    const updatedVehicle = await Vehicle.findById(vehicleId);

    expect(updatedVehicle.quantityInStock).toBe(9);

});

it("should return 404 when purchasing a non-existent vehicle", async () => {

    const user = {
        name: "John",
        email: "john@example.com",
        password: "password123"
    };

    await request(app)
        .post("/api/auth/register")
        .send(user);

    const loginResponse = await request(app)
        .post("/api/auth/login")
        .send({
            email: user.email,
            password: user.password
        });

    const token = loginResponse.body.token;

    const fakeVehicleId = new mongoose.Types.ObjectId();

    const response = await request(app)
        .post(`/api/vehicles/${fakeVehicleId}/purchase`)
        .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Vehicle not found");

});