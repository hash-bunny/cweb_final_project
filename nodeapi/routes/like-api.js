import express from "express";
import {createLike, deleteLike} from "../controllers/like-controller";
import {authorizeJWT} from "../middleware/auth-middleware";
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