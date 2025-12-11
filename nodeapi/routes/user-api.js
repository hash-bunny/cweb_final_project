import express from "express";
import bcrypt from 'bcrypt';
import {createUser, deleteUser, getAllUsers, updateUserUsername} from "../controllers/user-controller.js";
import {authorizeJWT} from "../middleware/auth-middleware.js";
const router = express.Router();
const apiPath = '/users';


// user POST request
router.post(apiPath, async (req, res) => {

    const password = hashPassword(req.body.password);
    const user = await createUser(req.body.username, req.body.email, password);

    if (user.id) return res.status(201).json(user);

    return res.status(400).json({error: user.error, errors: user.errors});
})


// user GET ALL request
router.get(apiPath, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }
    if (!req.user.admin) {
        return res.status(401).json({error: 'Admin Permissions required'});
    }

    const result = await getAllUsers();

    if (result?.users?.length) return res.status(200).json(result);
})


// user PUT username request
router.put(`${apiPath}/:id`, authorizeJWT ,async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const user = await updateUserUsername(req.user, req.body.newUsername)
    if (user.id) return res.status(201).json(user);

    return res.status(400).json({error: user.error, errors: user.errors});
})


// user PUT profile photo request
router.put(`${apiPath}/:id`, authorizeJWT ,async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const user = await updateUserPhoto(req.user, req.body.photoString)
    if (user.id) return res.status(201).json(user);

    return res.status(400).json({error: user.error, errors: user.errors});
})


// user DELETE request
router.delete(`${apiPath}/:id`, authorizeJWT ,async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const result = await deleteUser(req.body.username);
    if (result) return res.status(200).json({result: result});

    return res.status(400).json({error: 'Delete failed'});
})


/**
 * salts and hashes a given password for storage in the database
 * @param password the password we want to hash
 * @returns the password hash
 */
function hashPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    const hash = bcrypt.hash(password, salt);

    return hash;
}

export default router;