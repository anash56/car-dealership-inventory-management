import request from "supertest";
import app from "../../app.js";
import Vehicle from "../../models/Vehicle.js";
import User from "../../models/User.js";
import mongoose from "mongoose";

it("should restock a vehicle", async () => {

    const admin = {
        name: "Admin",
        email: "admin@example.com",
        password: "password123"
    };

    await request(app)
        .post("/api/auth/register")
        .send(admin);

    await User.findOneAndUpdate(
        { email: admin.email },
        { role: "admin" }
    );

    const loginResponse = await request(app)
        .post("/api/auth/login")
        .send({
            email: admin.email,
            password: admin.password
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

    const restockResponse = await request(app)
        .post(`/api/vehicles/${vehicleId}/restock`)
        .set("Authorization", `Bearer ${token}`);

    expect(restockResponse.status).toBe(200);
    expect(restockResponse.body.vehicle.quantityInStock).toBe(11);

    const updatedVehicle = await Vehicle.findById(vehicleId);

    expect(updatedVehicle.quantityInStock).toBe(11);

});

it("should return 404 when restocking a non-existent vehicle", async () => {

    const admin = {
        name: "Admin",
        email: "admin@example.com",
        password: "password123"
    };

    await request(app)
        .post("/api/auth/register")
        .send(admin);

    await User.findOneAndUpdate(
        { email: admin.email },
        { role: "admin" }
    );

    const loginResponse = await request(app)
        .post("/api/auth/login")
        .send({
            email: admin.email,
            password: admin.password
        });

    const token = loginResponse.body.token;

    const fakeVehicleId = new mongoose.Types.ObjectId();

    const response = await request(app)
        .post(`/api/vehicles/${fakeVehicleId}/restock`)
        .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Vehicle not found");

});