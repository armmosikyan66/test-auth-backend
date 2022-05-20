import bcrypt from "bcrypt";

import {IUserData} from "../interfaces/IUserData";
import UserModel from "../models/UserModel";
import UserRepositories from "../repositories/UserRepositories";
import jwt from "jsonwebtoken";

class UserService {
    async createUser({email, password, username, avatarUrl}: IUserData)  {
        try {
            const userExists = await UserModel.findOne({$or: [{email}, {username}]});

            if (userExists) {
                throw new Error(`User with Email ${email} or with Username ${username} already exist`);
            }

            const hashPassword = await bcrypt.hash(password, 8);

            const userData = {
                email,
                username,
                avatarUrl,
                password: hashPassword
            }

            return await UserRepositories.create(userData);

        } catch (e: any) {
            throw new Error(e);
        }
    }

    async verifyUser({email, password}: IUserData) {
        try {
            const user = await UserModel.findOne({email});

            if (!user) {
                throw new Error("User not found");
            }

            const isPassValid = await bcrypt.compareSync(password, user.password);

            if (!isPassValid) {
                throw new Error("Invalid Password");
            }

            const token = await jwt.sign({id: user.id}, `${process.env.SECRET_KEY}`, {expiresIn: "1d"});

            return {token, user};
        } catch (e: any) {
            throw new Error(e);
        }
    }
}

export default new UserService();