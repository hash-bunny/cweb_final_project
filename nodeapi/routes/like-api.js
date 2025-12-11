import express from "express";
import {createLike, deleteLike, getAllLikesByPostId, getLikeByUsernameAndPostId, updateLike} from "../controllers/like-controller.js";
import {authorizeJWT} from "../middleware/auth-middleware.js";
const router = express.Router();
const apiPath = '/likes';

// like POST request
router.post(apiPath, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const like = await createLike(req.user, req.post)
    if (like.id) return res.status(201).json(like);

    return res.status(400).json({error: like.message, errors: like.errors});
})


// like GET BY USERNAME AND POST ID request
router.get(apiPath, async (req, res) => {

    const result = await getLikeByUsernameAndPostId(req.user.username, parseInt(req.params.postId));
    if (result.like.id) return res.status(200).json(result);

    return res.status(404).json({error: result.message, errors: result.errors});
})


// like GET ALL LIKES BY POST ID
router.get(apiPath, async (req, res) => {

    const result = await getAllLikesByPostId(parseInt(req.params.postId));
    if (result?.likes?.length) return res.status(200).json(result);

    return res.status(404).json({error: result.message, errors: result.errors});
})


// like PUT request
router.put(apiPath, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const like = await updateLike(parseInt(req.params.id));
    if (like.id) return res.status(204).json(like);

    return res.status(400).json({error: like.message, errors: like.errors});
})


// like DELETE request
router.delete(`${apiPath}/:id`, authorizeJWT ,async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const result = await deleteLike(parseInt(req.params.id));
    if (result) return res.status(200).json({result: result});

    return res.status(400).json({error: 'Delete failed'});
})

export default router;