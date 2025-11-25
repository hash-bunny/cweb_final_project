import { Like } from '../db.js'
import {getUserByUsername} from "./user-controller";

/**
 * creates a like on a specified post
 * @param user the user object of the user liking the post
 * @param Post the post object of the post being liked
 * @returns the created like object
 */
export const createLike = async (user, Post) => {
    try {
        const like = await Like.create({
            likeAndUnlike: true,
        });
        like.setUser(user);
        like.setPost(Post);
        return like;
    } catch (error) {
        return error;
    }
}

/**
 * gets an unliked like object by the user that liked it originally
 * and the ID of the post it was on
 * (used for getting a like inorder to relike)
 * @param username username of the user that originally liked it
 * @param postId the ID of the post the like was on
 * @returns the like object
 */
export const getLikeByUsernameAndPostId = async (username, postId) => {
    try {
        const user = await getUserByUsername(username);
        const like = await Like.findOne({
            where: {
                userId: user.id,
                postId: postId,
            }
        });
        return like;
    } catch (error) {
        return error;
    }
}

/**
 * gets all likes on a specified post
 * @param postId the ID of the post we want the likes for
 * @returns a JSON object of all the likes
 */
export const getAllLikesByPostId = async (postId) => {
    try {
        const likes = await Like.findAll({
            where: { postId: postId }
        });
        return likes;
    } catch (error) {
        return error;
    }
}

/**
 * updates a like to be unliked
 * @param likeId the ID of the like we want to update
 */
export const updateLike = async (likeId) => {
    try {
        const like = await Like.findByPk(likeId);
        await like.update({likeAndUnlike: false});
        await like.save();
    } catch (error) {
        return error;
    }
}

/**
 * Deletes a specified like
 * @param likeId The ID of the Like that you want to delete
 * @returns {Promise<*>}
 */
export const deleteLike = async (likeId) => {
    try {
        await Like.destroy({
            where: { likeId: likeId },
        });
    } catch (error) {
        return error;
    }
}