import express from "express";
import {login, processLogin, saveSignup} from '../controller/AuthController.js';

const authRoutes = express.Router();

authRoutes
    .route("/login")
    .get(login)
    .post(processLogin);

authRoutes
    .route("/register") 
    .post(saveSignup);


export default authRoutes;