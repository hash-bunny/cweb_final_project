import express from "express";
import {createUser} from "../controllers/user-controller";

const router = express.Router();
const bcrypt = require('bcrypt');
const express = require("express");
const apiPath = '/users';

// user POST request
router.post(apiPath, async (req, res) => {

    const password = hashPassword(req.body.password);
    const user = await createUser(req.body.username, req.body.email, password);

    if (user.id) return res.status(201).json(user);

    return res.status(400).json({error: user.error, errors: user.errors});
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