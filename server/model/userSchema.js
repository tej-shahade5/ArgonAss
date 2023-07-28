import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    }
})

const userModel = mongoose.model('user',userSchema);

export default userModel;