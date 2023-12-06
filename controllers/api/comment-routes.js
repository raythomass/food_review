const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');router.get('/', async(req, res) => {//Edwin "Grabs all the the comments from the review" -need some adjustment
    try {
        const dbCommentData = await Comment.findAll({});
        if(dbCommentData.length === 0) {
            res.status(404).json({message: "There are no Comments Posted"});
            return;
        };
        res.status(200).json(dbCommentData);
    }catch (err){
        res.status(500).json(err);
    }
});router.get('/:id', async(req, res) => {//Edwin "Grabs one comment from the review"
    try{
        const commentData = await Comment.findAll({
            where:{id: req.params.id},
        });
        if(commentData.length === 0){
            res.status(404).json({message: `This Food has no Recommendation.`});
            return;
        }
        res.status(200).json(commentData);
    }catch (err) {
        res.status(500).json(err);
    }
});router.post('/', withAuth, async(req,res) => {//Edwin "post a new comment on the review"
    const body = req.body;
    try{
        const newComment = await Comment.create({
            ...body,
            userId: req.session.userId,
        });
        res.status(200).json({newComment, success: true});
    } catch (err) {
        res.status(500).json(err);
    }
});router.delete('/:id', withAuth, async (req, res) => {//Edwin "deletes the comment from the review"
    try{
        const dbCommentData = await Comment.destroy({
            where:{id: req.params.id},
        });
        if(!dbCommentData) {
            res.status(404).json({message: `No Comment was found`});
            return;
        }
        res.status(200).json({dbCommentData, success: true});
    }catch (err) {
        res.status(500).json(err);
    }
});module.exports = router;