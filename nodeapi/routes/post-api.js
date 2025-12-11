import express from 'express';
import {authorizeJWT} from "../middleware/auth-middleware.js";
import {createPost, getPostById, getAllPosts, updatePost, deletePost} from "../controllers/post-controller.js";
const router = express.Router();
const apiPath = '/posts';


// post POST request (haha)
router.post(apiPath, authorizeJWT, async (req, res) => {
    if (req.error)
    {
        return res.status(req.status).json({error: req.error});
    }

    const post = await createPost(req.user, req.body.title, req.body.postText);

    if (post.id) return res.status(201).json(post);

    return res.status(401).json({error: post.message, errors: post.errors});
})


// post GET BY ID request
router.get(`${apiPath}/:id`, async (req, res) => {
    let result = await getPostById(parseInt(req.params.id));
    if (result.id) return res.json(result);
    else return res.status(404).json({error: 'Post not found'});
})


// post GET ALL request
router.get(apiPath, async (req, res) => {
    const result = await getAllPosts();
    if (result?.posts?.length) return res.json(result);

    return res.status(404).json({error: 'No posts found'});
})


// post PUT request
router.put(`${apiPath}/:id`, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const post = await updatePost(parseInt(req.params.id), req.body.title, req.body.postText);
    if (post.id) return res.status(204).json(post);

    return res.status(400).json({error: post.message, errors: post.errors});
})


// post DELETE request
router.delete(`${apiPath}/:id`, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const result = await deletePost(parseInt(req.params.id));
    if (result) return res.status(200).json({result: result});

    return res.status(400).json({error: 'Delete failed'});
})

export default router;