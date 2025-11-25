import express from 'express';
import {authorizeJWT} from "../middleware/auth-middleware";
import {createPost} from "../controllers/post-controller";
const router = express.Router();
const apiPath = '/posts';

// post POST method (haha)
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