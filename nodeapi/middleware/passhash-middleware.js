const bcrypt = require('bcrypt');

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

/**
 * confirms the password matches the stored password hash
 * @param password the password we want to compare
 * @param passHash the password hash we want to compare
 * @returns returns a boolean depending on if the password and hash match
 */
async function verifyPassword(password, passHash) {
    return await bcrypt.compare(password, passHash);
}