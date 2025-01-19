import {mongoose}  from "../utils/db.js";
  
const serviceSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true,
    },
    action: {
        type: [String],  
        required: true,
        validate: {
            validator: (v) => Array.isArray(v) && v.length > 0,
            message: "Action must be a non-empty array."
        }
    }
});

const userSchema  = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    service: { // Array of subdocuments
        type: [serviceSchema],
        required: true,
        validate: {
            validator: (v) => Array.isArray(v) && v.length > 0,
            message: "Service must be a non-empty array."
        }
    }
});


userSchema.statics.findByUsername = async (username) => {
    try {
        return await mongoose.model("Users").findOne({ username });
    } catch (err) {
        console.error("Error in findByUsername:", err);
        throw err;
    }
}

const usersCollection = mongoose.model("Users", userSchema);

export default usersCollection;