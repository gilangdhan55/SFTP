import express from "express"; 
import authRoutes from "./auth.js";
import sftpRoutes from "./sftp.js";
import api from  './api.js';
 
const routes    = express.Router();
 
routes.get("/", (req, res) => {
    res.redirect("/login");
});

routes.get("/set-cookie", (req, res) => {
    res.cookie("token", "test-token", {
        httpOnly: true,
        secure: false,  
        sameSite: "none",
    });
    res.send("Cookie telah diset!");
});
  
routes.use(authRoutes); 
 
routes.use(sftpRoutes);

routes.use(api);

routes.use("*", (req, res) => {
    res.status(404).send('Not Found');
});

export default routes;