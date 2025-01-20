import express from "express";
import routes from "./routes/index.js";
import appMiddleWare from "./middleware/index.js"; 
import path from "path";
import url from "url";
import {db2} from "./utils/db.js";

const app           = express();
await db2();

const port          = 3000;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.set('trust proxy', true);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(appMiddleWare); 

app.use(routes);   
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Example app listening on port http://localhost:${port}`);
})

