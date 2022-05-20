import express, {json} from "express";
import {validationResult} from 'express-validator';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import UserService from "../services/UserService";
import UserModel from "../models/UserModel";

class UserController {
    async create(req: express.Request, res: express.Response) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors});
            }

            const user = await UserService.createUser(req.body);

            user.save();

            return res.status(201).json({message: "success"});
        } catch (e) {
            res.status(500).json({message: e});
        }
    }

    async verify(req: express.Request, res: express.Response) {
        try {
            const {token, user}:any = await UserService.verifyUser(req.body);

            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    avatarUrl: user.avatarUrl,
                }
            });
        } catch (e) {
            res.status(404).json({message: `Error: ${e}`});
        }
    }
}

export default new UserController();