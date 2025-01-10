const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contactInfo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    roomNumber: { type: Number, required: true },
    bedNumber: { type: Number, required: true },
    floorNumber: { type: Number, required: true },
    diseases: [String],
    allergies: [String],
    dietChart: {
        morning: String,
        evening: String,
        night: String,
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
