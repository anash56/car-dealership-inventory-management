import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
    {
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantityInStock: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;