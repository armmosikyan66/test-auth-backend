import {Schema, model} from 'mongoose';

const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true,
        default: ""
    },
    username: {
        type: String,
        required: true,
    }
})

const UserModel = model("User", User);

export default UserModel;