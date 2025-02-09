import express from "express"; 
import authRoutes from "./auth.js";
import sftpRoutes from "./sftp.js";

 
const routes    = express.Router();

routes.get("/", (req, res) => {
    res.redirect("/login");
});

routes.use(authRoutes); 
routes.use(sftpRoutes);

routes.use("*", (req, res) => {
    res.status(404).send('Not Found');
});

export default routes;