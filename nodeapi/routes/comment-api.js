import express from 'express';
import {authorizeJWT} from "../middleware/auth-middleware";
import {createComment, getAllCommentsByPostId} from "../controllers/comment-controller";

const router = express.Router();
const apiPath = '/comments';


//comment POST request
router.post(apiPath, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const comment = await createComment(req.post, req.user, req.body.commentText);

    if (comment.id) return res.status(201).json(comment);

    return res.status(400).json({error: comment.message, errors: comment.errors});
})


// comment GET ALL BY POST ID request
router.get(`${apiPath}/:postId`, async (req, res) => {
    const result = await getAllCommentsByPostId(req.params.postId);
    if (result?.comments?.length) return res.status(200).json(result);
})

export default router;