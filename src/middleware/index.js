import express from "express";
import bodyParser from "body-parser"; 
import multer from "multer";  
import "../logs/winston.js";

const appMiddleWare     = express(); 
const upload            = multer();

import cookieParser from "cookie-parser";
import session from "express-session";
import expressEjsLayouts from "express-ejs-layouts";
import flash from "express-flash";
import path from "path";
import url from "url";
import ejs from "ejs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
 
appMiddleWare.engine("html", ejs.renderFile);
appMiddleWare.set("view engine", "ejs");
appMiddleWare.use(expressEjsLayouts); 
appMiddleWare.use(express.static(path.join(__dirname, "../../public")));
appMiddleWare.use(upload.array());
appMiddleWare.use(bodyParser.json());
appMiddleWare.use(bodyParser.urlencoded({ extended: true }));
appMiddleWare.use(cookieParser());
appMiddleWare.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000,  
        secure: false, 
        httpOnly: true,       
    } 
}));
appMiddleWare.use(flash());
    
export default appMiddleWare;

