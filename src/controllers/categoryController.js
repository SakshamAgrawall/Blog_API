import categorySchema from "../models/categoryModel.js"
import slugify from "slugify"


// createCategoryController
export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(401).send({ Message: "name is required" })
        }
        const existCategory = await categorySchema.findOne({ name })
        if (existCategory) {
            return res.status(200).send({ success: true, Message: "Category Already Exist" })
        }
        const category = await new categorySchema({ name, slug: slugify(name) }).save()
        res.status(201).send({ success: true, Message: "new Category Added", category })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error, Message: 'error in category' })
    }
}

// getCategoryController
export const getCategoryController = async (req, res) => {
    try {
        const category = await categorySchema.find({})
        res.status(200).send({ success: true, Message: "category are finded", category })

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error, Message: 'error in getting category' })
    }
}
