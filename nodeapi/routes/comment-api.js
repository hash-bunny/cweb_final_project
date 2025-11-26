import express from 'express';
import {authorizeJWT} from "../middleware/auth-middleware";
import {createComment, deleteComment, getAllCommentsByPostId, updateComment} from "../controllers/comment-controller";
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
    const result = await getAllCommentsByPostId(parseInt(req.params.postId));
    if (result?.comments?.length) return res.status(200).json(result);
})


// comment PUT request
router.put(`${apiPath}/:id`, authorizeJWT, async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const comment = await updateComment(parseInt(req.params.id), req.body.commentText);
    if (comment.id) return res.status(204).json(comment);

    return res.status(400).json({error: comment.message, errors: comment.errors});
})


// comment DELETE request
router.delete(`${apiPath}/:id`, authorizeJWT ,async (req, res) => {
    if (req.error) {
        return res.status(401).json({error: req.error});
    }

    const result = await deleteComment(parseInt(req.params.id));
    if (result) return res.status(200).json({result: result});

    return res.status(400).json({error: 'Delete failed'});
})

export default router;