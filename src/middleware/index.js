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

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

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
        maxAge: 30 * 60 * 1000, // Durasi sesi: 30 menit (dalam milidetik)
        secure: false,          // Atur true jika menggunakan HTTPS
        httpOnly: false,          // Lindungi cookie dari akses JavaScript
        domain: "localhost",      // Atur domain jika menggunakan HTTPS
    }

}));
appMiddleWare.use(flash());    
export default appMiddleWare;

