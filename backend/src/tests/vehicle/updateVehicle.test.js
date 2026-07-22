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