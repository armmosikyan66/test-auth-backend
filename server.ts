import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

import authRouter from './routes/auth.route';
import './database/db';

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/auth", authRouter);

app.listen(5000, () => {
    console.log(`\nserver running on port: 5000`);
})