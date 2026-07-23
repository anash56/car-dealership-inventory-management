export const validateVehiclePayload = (payload) => {
    const requiredKeys = ["make", "model", "category", "price", "quantityInStock"];
    for (const key of requiredKeys) {
        if (!Object.prototype.hasOwnProperty.call(payload, key)) {
            return "Make, model, category, price, and quantity in stock are required";
        }
    }
    const { price, quantityInStock } = payload;
    if (price <= 0) {
        return "Price must be a positive number";
    }
    if (!Number.isInteger(quantityInStock) || quantityInStock < 0) {
        return "Quantity in stock must be a non-negative integer";
    }
    return null;
};
