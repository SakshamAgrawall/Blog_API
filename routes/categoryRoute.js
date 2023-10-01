import express from "express";
import { createCategoryController, getCategoryController } from '../controllers/categoryController.js'
const router = express.Router()

//routes
router.post('/', createCategoryController);
router.get('/', getCategoryController);


export default router;