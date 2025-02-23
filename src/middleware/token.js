import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
  const token = req.cookies.token;  
  if (!token) {
    return res.status(401).json({ message: "Akses ditolak, token tidak ditemukan" });
  } 
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); 
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Token tidak valid" });
  }
};

export default checkToken;
