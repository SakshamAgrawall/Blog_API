import dotenv from 'dotenv';
dotenv.config();
export const apiKeyMiddleware = (req, res, next) => {

    const apiKey = req.get('API-Key');
    if (apiKey && apiKey === process.env.APIKEY) {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: 'Forbidden: Invalid API Key'
        });
    }
};