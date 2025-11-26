import {User} from '../db.js'

/**
 * user create method
 * @param username user's username
 * @param passHash user's hashed password (hashing is done in api)
 * @returns the created user object
 */
export const createUser = async(username, email, passHash) => {
    try {

        const user = User.create({
            username: username,
            email: email,
            passHash: passHash,
        });
        return user;
    } catch (error) {
        return error;
    }
}

/**
 * gets a single user by their username
 * @param username user's username
 * @returns a single user by their username
 */
export const getUserByUsernameAndEmail = async(username, email) => {
    try {
        const user = await User.findOne({
                where: { username: username, email: email }
            });
        return user;
    } catch (error) {
        return error;
    }
}

/**
 * gets all users from the database
 * @returns a JSON object containing all users
 */
export const getAllUsers = async() => {
    try {
        const users = await User.findAll();
        return {users: users};
    } catch (error) {
        return error;
    }
}

/**
 * update method for a user's username
 * @param username users old username
 * @param newUsername user's new username
 */
export const updateUserUsername = async(username, newUsername) => {
    try {
        const user = await User.find({username: username});
        await user.update({ username: newUsername });
        await user.save();
    } catch (error) {
        return error;
    }
}

/**
 * updates a users profile photo
 * @param username user's username
 * @param photoString string representing the filepath for the uploaded profile photo
 */
export const updateUserPhoto = async(username, photoString) => {
   try {
       const user = await User.find({username: username});
       await user.update({ profilePhoto: photoString });
       await user.save();
   } catch (error) {
       return error;
   }
}

/**
 * deletes a specified user
 * @param username the username of the user being deleted
 */
export const deleteUser = async(username) => {
    try {
        const deletedRows = await User.destroy({
            where: { username: username }
        });

        return deletedRows > 0;
    } catch (error) {
        return error;
    }
}