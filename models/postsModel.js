import mongoose from "mongoose";

const postsModel = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title is required"],
        },
        content: {
            type: String,
            required: [true, "description is require"],
        },
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: "Blogcategory",
            index: true,
            require: [true, "category is required"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("posts", postsModel);
