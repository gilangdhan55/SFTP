import express from "express";
import {processLogin} from '../controller/AuthController.js';

const api = express.Router();

api
    .route("/api/login") 
    .post(processLogin);


export default api;

