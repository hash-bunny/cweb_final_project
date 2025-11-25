import express from 'express';
import {authorizeJWT} from "../middleware/auth-middleware";
import {createPost, getPostById, getAllPosts} from "../controllers/post-controller";
const router = express.Router();
const apiPath = '/posts';

// post GET ALL path
router.get(apiPath, async (req, res) => {
    const result = await getAllPosts();
    if (result?.posts?.length) return res.json(result);

    return res.status(404).json({error: 'No posts found'});
})


// post POST path (haha)
router.post(apiPath, authorizeJWT, async (req, res) => {
    if (req.error)
    {
        return res.status(req.status).json({error: req.error});
    }

    const post = await createPost(req.user, req.body.title, req.body.postText);

    if (post.id) return res.status(201).json(post);

    return res.status(401).json({error: post.message, errors: post.errors});
})

export default router;