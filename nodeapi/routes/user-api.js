import express from "express";

const router = express.Router();
const bcrypt = require('bcrypt');
const express = require("express");
const apiPath = '/users';

/**
 * salts and hashes a given password for storage in the database
 * @param password the password we want to hash
 * @returns the password hash
 */
async function hashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

export default router;