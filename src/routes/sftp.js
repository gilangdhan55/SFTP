import express from "express";
import {index, getCustomer} from '../controller/SftpController.js';
const sftpRoutes = express.Router();

import checkToken from "../middleware/token.js"; 

sftpRoutes
    .route("/sftp")
    .get(checkToken, index);

sftpRoutes
    .route("/sftp/list_customers")
    .get(checkToken, getCustomer)
    .post(checkToken, getCustomer);

export default sftpRoutes;