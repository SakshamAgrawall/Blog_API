import express from "express";
import {
    UpdatePostsController,
    createPostsController,
    deletepostController,
    getAllPostsController,
    getLatestPostsController,
    singlePostController
} from '../controllers/postsControllers.js';

import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware.js';
import { basicAuthMiddleware } from '../middleware/basicAuth.js';

const router = express.Router();

// Routes
router.get('/:id', basicAuthMiddleware, apiKeyMiddleware, singlePostController);
router.get('/latest/post', basicAuthMiddleware, apiKeyMiddleware, getLatestPostsController);

// General routes
router.get('/', basicAuthMiddleware, apiKeyMiddleware, getAllPostsController);
router.post('/', basicAuthMiddleware, apiKeyMiddleware, createPostsController);
router.put('/:id', basicAuthMiddleware, apiKeyMiddleware, UpdatePostsController);
router.delete('/:id', basicAuthMiddleware, apiKeyMiddleware, deletepostController);

export default router;
