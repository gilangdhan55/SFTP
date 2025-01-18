import logger from "./winston.js"

const logProccess = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.ip;  
    logger.info(`${req.method} ${req.url} - ${ip}`); 
    next();
}

export default logProccess;