import basicAuth from 'express-basic-auth';
import dotenv from 'dotenv'
dotenv.config();

export const basicAuthMiddleware = basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
    unauthorizedResponse: 'Unauthorized Access'
});