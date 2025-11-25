import jwt from 'jsonwebtoken';
import {getUserByUsername} from "../controllers/user-controller";

const JWT_SECRET_KEY = "e8371e6a66d45eecc6b4596085b1b731edaf37d0c27c9820ce4c37c06972f66e4f85ef0d6184ed502374f64bc556f5ae6e3d8fa2ae028220955bac9853c22728";

export const generateJWT = (payload, rememberMe) => {
    const expiresIn = rememberMe ? "7d" : "1h"
    return jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: expiresIn });
}

export const authorizeJWT = (req, res, next) => {
    let token;
    if (req.headers?.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        const error = new Error("No token provided");
        req.status = 401;
        req.error = error;
        return next();
    }
    else {
        jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
            if (err) {
                const error = new Error("Not authorized");
                req.status = 403;
                req.error = error;
                return next();
            }
            const user = getUserByUsername(payload.user.username);
            if (!user) {
                const error = new Error("No user found");
                req.status = 404;
                req.error = error;
                return next();
            }
            req.user = user;
            req.jwt = jwt;
            next();
        })
    }
}