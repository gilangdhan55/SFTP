import express from "express";
import {login, process, saveSignup} from '../controller/AuthController.js';

const authRoutes = express.Router();

authRoutes
    .route("/login")
    .get(login)
    .post(process);

authRoutes
    .route("/register") 
    .post(saveSignup);


export default authRoutes;