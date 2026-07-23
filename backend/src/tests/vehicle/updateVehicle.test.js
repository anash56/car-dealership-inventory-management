import request from "supertest";
import app from "../../app.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

it("should update a vehicle", async () => {

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

    const updateResponse = await request(app)
        .put(`/api/vehicles/${vehicleId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
            make: "Honda",
            model: "City",
            category: "Sedan",
            price: 1800000,
            quantityInStock: 15
        });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.vehicle.make).toBe("Honda");
    expect(updateResponse.body.vehicle.model).toBe("City");
    expect(updateResponse.body.vehicle.category).toBe("Sedan");
    expect(updateResponse.body.vehicle.price).toBe(1800000);
    expect(updateResponse.body.vehicle.quantityInStock).toBe(15);

});


// Helper to generate auth token
const getToken = () => {
  return jwt.sign(
    {
      id: "123",
      email: "user@example.com",
      role: "user",
    },
    process.env.JWT_SECRET
  );
};

// RED validation tests
it("should return 400 Bad Request when required fields are missing", async () => {
  const token = getToken();
  const response = await request(app)
    .put("/api/vehicles/1")
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
  const token = getToken();
  const response = await request(app)
    .put("/api/vehicles/1")
    .set("Authorization", `Bearer ${token}`)
    .send({
      make: "Toyota",
      model: "Fortuner",
      category: "SUV",
      price: -100,
      quantityInStock: 5,
    });
  expect(response.status).toBe(400);
  expect(response.body.message).toBe("Price must be a positive number");
});

it("should return 400 Bad Request when quantityInStock is negative or invalid", async () => {
  const token = getToken();
  const response = await request(app)
    .put("/api/vehicles/1")
    .set("Authorization", `Bearer ${token}`)
    .send({
      make: "Toyota",
      model: "Fortuner",
      category: "SUV",
      price: 4500000,
      quantityInStock: -5,
    });
  expect(response.status).toBe(400);
  expect(response.body.message).toBe("Quantity in stock must be a non-negative integer");
});

// Case‑insensitive RED tests
it("should return 400 when required fields are provided with wrong case", async () => {
  const token = getToken();
  const response = await request(app)
    .put("/api/vehicles/1")
    .set("Authorization", `Bearer ${token}`)
    .send({
      Make: "Toyota",
      Model: "Fortuner",
      Category: "SUV",
      price: 4500000,
      quantityInStock: 10,
    });
  expect(response.status).toBe(400);
  expect(response.body.message).toBe("Make, model, category, price, and quantity in stock are required");
});

it("should return 400 when some required fields are correct but others have wrong case", async () => {
  const token = getToken();
  const response = await request(app)
    .put("/api/vehicles/1")
    .set("Authorization", `Bearer ${token}`)
    .send({
      make: "Toyota",
      Model: "Fortuner",
      category: "SUV",
      price: 4500000,
      quantityInStock: 10,
    });
  expect(response.status).toBe(400);
  expect(response.body.message).toBe("Make, model, category, price, and quantity in stock are required");
});

// Existing 404 test
it("should return 404 when vehicle does not exist", async () => {
  
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
        .put(`/api/vehicles/${fakeVehicleId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
            make: "Honda"
        });
  
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Vehicle not found");
  
});