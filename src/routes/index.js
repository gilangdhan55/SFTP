import express from "express";

import {login} from '../controller/login.js';

 
const routes    = express.Router();

routes.get("/", (req, res) => {
    res.redirect("/login");
});

routes.get("/login", login);


export default routes;