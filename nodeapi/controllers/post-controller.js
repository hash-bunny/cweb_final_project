import {Post} from '../db.js'

/**
 * creates a post
 * @param user user object
 * @param title title of the post
 * @param postText the text content of the post
 * @returns the created post object
 */
export const createPost = async(user, title, postText) => {
    try {
        const post = Post.create({
            title: title,
            postText: postText,
        });
        post.setUser(user);
        return post;
    } catch (error) {
        return error;
    }
}

/**
 * gets a specific post by its ID
 * @param postId the ID of the post you want to update
 * @returns the specified post
 */
export const getPost = async (postId) => {
    try {
        const post = await Post.findByPk(postId);
        return post;
    } catch (error) {
        return error;
    }
}

/**
 * gets all posts stored in the database
 * @returns a JSON object of all the posts retrieved
 */
export const getAllPosts = async() => {
    try {
        const posts = await Post.findAll();
        return posts;
    } catch (error) {
        return error;
    }
}

/**
 * Updates a post's title and text with the updated title and text
 * @param postId ID of the post you want to update
 * @param title the updated title
 * @param postText the updated postText
 */
export const updatePost = async (postId, title, postText) => {
    try {
        const post = await Post.findByPk(postId);
        await post.update({title: title, postText: postText, edited: true});
        await post.save();
    } catch (error) {
        return error;
    }
}

/**
 * deletes a post by its ID
 * @param postId the ID of the post you want to delete
 * @returns {Promise<*>}
 */
export const deletePost = async (postId) => {
    try {
        await Post.destroy({
            where: {
                id: postId
            },
        });
    } catch (error) {
        return error;
    }
}