import express from "express";
import {getUserByUsernameAndEmail} from "../controllers/user-controller";
import {generateJWT} from "../middleware/auth-middleware";
const router = express.Router();
const bcrypt = require('bcrypt');
const apiPath = '/login';

// login POST request
router.post(apiPath, async (req, res) => {
    const user = getUserByUsernameAndEmail(req.body.username, req.body.email);

    if (user.id) {

        if (verifyPassword(req.body.password, user.password)) {
            const token = generateJWT(user);
            res.cookie('jwt', token, {maxAge: 60 * 60 * 1000 });
            res.status(200).json({token: token});
        }
        else {
            res.status(401).json({error: "Username or Password is incorrect"});
        }
    }
    else {
        res.status(401).json({error: "Username or Password is incorrect"});
    }
})

/**
 * confirms the password matches the stored password hash
 * @param password the password we want to compare
 * @param passHash the password hash we want to compare
 * @returns returns a boolean depending on if the password and hash match
 */
function verifyPassword(password, passHash) {
    return bcrypt.compare(password, passHash);
}

export default router;

