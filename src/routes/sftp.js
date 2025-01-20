import express from "express";
import {index} from '../controller/SftpController.js';
const sftpRoutes = express.Router();

sftpRoutes
    .route("/sftp")
    .get(index)

export default sftpRoutes;