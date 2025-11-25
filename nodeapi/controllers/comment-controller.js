import {Comment} from '../db.js'

/**
 * Creates a comment
 * @param post a post object that the comment will be attached to
 * @param user the user that is posting the comment
 * @param commentText the text content of the comment
 * @returns the created comment object
 */
export const createComment = async (post, user, commentText) => {
    try {
        const comment = await Comment.create({
            commentText: commentText,
        })
        comment.setUser(user);
        comment.setPost(post);
        return comment;
    } catch (error) {
        return error;
    }
}

/**
 * Gets all comments on a specified post
 * @param postId the ID of the post you want to get the comments for
 * @returns {Promise<*|Model[]>}
 */
export const getAllCommentsByPostId = async (postId) => {
    try {
        const comments = await Comment.findAll({
            where: { postId: postId }
        });
        return comments;
    } catch (error) {
        return error;
    }
}

/**
 * Updates a specified comment
 * @param commentId the ID of the comment we want to update
 * @param commentText the updated text content of the comment
 */
export const updateComment = async (commentId, commentText) => {
    try {
        const comment = await Comment.findByPk(commentId);
        await comment.update({commentText: commentText, edited: true});
        await comment.save();
    } catch (error) {
        return error;
    }
}

/**
 * Deletes a comment by its ID
 * @param commentId the ID of the comment we want to delete
 */
export const deleteComment = async (commentId) => {
    try {
        await Comment.destroy({
            where: { id: commentId }
        })
    } catch (error) {
        return error;
    }
}

