import {registerValid, loginValid}  from "../validation/auth.js"; 
import usersCollection from "../model/AuthModel.js";
import {encript, compare} from "../utils/bcrypt.js"; 
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;
  
export const login = (req, res) => {
    const data = {
        title: "Login", 
        layout: false,  
    } 
    res.render("login", data);
}
 
export const processLogin = async (req, res) => { 
    const {data, status, message}    = await loginValid(req.body);  
    if(!status) return res.status(400).json({status, message});  
    const available = await usersCollection.findByUsername(data.username);
   
    if(available === null){
        return res.status(404).json({
            status: false,
            message: "User not found",
        });
    } 
    const isMatch = await compare(req.body.password, available.password);

    if(!isMatch){
        return res.status(401).json({
            status: false,
            message: "User not found",
        });
    } 
    const token = jwt.sign({ id: available.id, username: available.username }, SECRET_KEY, { expiresIn: "1h" });
     
    res.cookie("token", token, { 
        httpOnly: true,  
        secure: false,  
        sameSite: "lax",
    }); 
    console.log(req.cookies); 
    res.status(200).json({
        status: true,
        message: "User logged in successfully",
        token: token
    }); 
}

export const saveSignup = async (req, res) => {
    const {status, data, message} = await registerValid(req.body);
    
    if(!status) return res.status(400).json({status, message});
    
    try {
        const available = await usersCollection.findByUsername(data.username);
        
        if(available !== null){
            return res.status(409).json({
                status: "error",
                message: "Username already exists",
            });
        }
        const newUser = {
            ...data,
            password: await encript(data.password)
        }
        const user = new usersCollection(newUser);
        try { 
            await user.save();
     
            return res.status(201).json({
                status: "success",
                message: "User registered successfully",
            });
        } catch (error) {
            return res.status(500).json({
                status: "error",
                message: "Failed to register user",
            });
        } 
    } catch (error) {
        console.log(error);
    }
 
 }