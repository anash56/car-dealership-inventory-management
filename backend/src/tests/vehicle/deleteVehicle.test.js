import request from "supertest";
import app from "../../app.js";
import Vehicle from "../../models/vehicle.model.js";

it("should delete a vehicle", async () => {

    const admin = {
        name: "Admin",
        email: "admin@example.com",
        password: "password123",
        role: "admin"
    };

    await request(app)
        .post("/api/auth/register")
        .send(admin);

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

    const deleteResponse = await request(app)
        .delete(`/api/vehicles/${vehicleId}`)
        .set("Authorization", `Bearer ${token}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe("Vehicle deleted successfully");

    const deletedVehicle = await Vehicle.findById(vehicleId);

    expect(deletedVehicle).toBeNull();

});