import postsModels from '../models/postsModel.js';
import { validationResult } from 'express-validator';
import mongoose from 'mongoose';

export const createPostsController = async (req, res) => {
    // Validate request parameters and body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, content, category_id } = req.body
        if (!title) {
            return res.status(400).send({ message: 'title is Required' })
        }
        if (!content) {
            return res.status(400).send({ message: 'content is Required' })
        }
        if (!category_id) {
            return res.status(400).send({ message: 'category_id is Required' })
        };

        const post = await postsModels({ title, content, category_id }).save()
        res.status(201).send({
            success: true,
            message: "Post created successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating post"
        })
    }
}


export const getAllPostsController = async (req, res) => {
    try {
        const posts = await postsModels.find({}).populate('category_id');

        if (!posts) {
            return res.status(404).send({
                success: false,
                message: 'No posts found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Posts get succeefully',
            posts
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in getting Posts"
        })
    }
}


export const singlePostController = async (req, res) => {
    try {
        const postId = req.params.id;
        if (!mongoose.isValidObjectId(postId)) {
            return res.status(400).send({
                success: false,
                message: 'Invalid post id'
            });
        }
        const singlePost = await postsModels.findById(postId).populate('category_id')

        if (!singlePost) {
            return res.status(404).send({
                success: false,
                message: 'Post not found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Post get succeefully',
            singlePost
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in getting single post"
        })
    }
}


export const UpdatePostsController = async (req, res) => {
    try {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).send({
                success: false,
                message: 'Invalid post id'
            });
        }

        const { title, content } = req.body
        if (!title) {
            return res.status(400).send({ message: 'title is Required' })
        }
        if (!content) {
            return res.status(400).send({ message: 'content is Required' })
        }

        const post = await postsModels.findByIdAndUpdate(req.params.id, { title, content }, { new: true })

        if (!post) {
            return res.status(404).send({
                success: false,
                message: 'Post not found'
            });
        }
        await post.save()
        res.status(200).send({
            success: true,
            message: "Post Update successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updating post"
        })
    }
}


export const deletepostController = async (req, res) => {
    try {
        const postId = req.params.id
        await postsModels.findByIdAndDelete(postId)
        res.status(200).send({ success: true, Message: "post deleted successfully" })


    } catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in  delete post"
        })
    }
}



export const getLatestPostsController = async (req, res) => {
    try {
        const latestPosts = await postsModels.aggregate([
            {
                $sort: { createdAt: -1 }
            },
            {
                $group: {
                    _id: "$category_id",
                    latestPost: { $first: "$$ROOT" }
                }
            },
            {
                $replaceRoot: { newRoot: "$latestPost" }
            }
        ]);

        res.status(200).json({
            success: true,
            latestPosts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Error in retrieving latest posts by category"
        });
    }
};


