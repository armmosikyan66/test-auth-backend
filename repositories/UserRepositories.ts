import UserModel from "../models/UserModel";
import {IUserData} from "../interfaces/IUserData";

class UserRepositories {
    model;

    constructor(UserModel: any) {
        this.model = UserModel;
    }

    create(userData: IUserData) {
        return this.model.create(userData);
    }

    findOne({email}: IUserData) {
        return this.model.findOne(email);
    }
}

export default new UserRepositories(UserModel);