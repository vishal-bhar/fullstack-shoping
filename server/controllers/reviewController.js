import ROLE from "../utils/constants.js";
import Product from "../models/Product.js";
import Review from "../models/Review.js";


const createReview = async (req, res) => {
    if (req.role !== ROLE.user) {
        return res.status(401)
            .json({
                success: false,
                message: "Access denied"
            })
    };

    const userId = req.id;

    try {
        const { productId, review, rating } = req.body;

        const newReview = await Review.create({
            productId,
            review,
            userId,
            rating
        });

        newReview.populate("userId", "name");

        let product = await Product.findByIdAndUpdate(productId, {
            $push: { reviews: newReview._id }
        });

        await product.calculateRating();

        return res.status(200)
            .json({
                success: false,
                message: "Thanks for the Review",
                data: newReview
            })


    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message
            })

    }
};

const updateReview = async (req, res) => {
    if (req.role !== ROLE.user) {
        return res.status(401)
            .json({
                success: false,
                message: "Access denied"
            })
    };

    try {
        const { id } = req.params;
        const { updatedReview } = req.body;

        let review = await Review.findByIdAndUpdate(id,
            { review: updatedReview }, { new: true });

        await review.populate("userId", "name");

        if (!review) {
            return res.status(404)
                .json({
                    success: false,
                    message: "Review not found"
                })
        };

        return res.status(200)
            .json({
                success: false,
                data: review,
                message: "Review Updated"
            })


    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message
            })

    }
};

const replyReview = async (req, res) => {
    if (req.role !== ROLE.user) {
        return res.status(401)
            .json({
                success: false,
                message: "Access denied"
            })
    };

    const userId = req.id;
    const { id } = req.params;
    try {
        const { review } = req.body;

        let foundReview = await Review.findByIdAndUpdate({ _id: id },
            { $push: { replies: { userId, review } } },
            { new: true }
        ).populate("replies.userId", "name").populate("userId", "name");

        if (!foundReview) {
            return res.status(404)
                .json({
                    success: false,
                    message: "Review not found"
                })
        };

        return res.status(200)
            .json({
                success: true,
                message: "Reply added Successfully",
                data: foundReview
            })


    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message
            })

    }
};

const deleteReview = async (req, res) => {
    if (req.role !== ROLE.user) {
        return res.status(401)
            .json({
                success: false,
                message: "Access denied"
            })
    };

    try {

        const { id } = req.params;

        let review = await Review.findByIdAndDelete(id);

        if (!review) {
            return res.status(404)
                .json({
                    success: false,
                    message: "review not found vidsahl"
                })
        };

        let product = await Product.findByIdAndUpdate(review.productId, {
            $pull: { reviews: review._id }
        });

        await product.calculateRating();

        if (!review) {
            return res.status(404)
                .json({
                    success: false,
                    message: "review not found vidsahl"
                })
        };

       return res.status(200)
                .json({
                    success: true,
                    message: "review deleted "
                })

    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message
            })
    };

};

const getReview= async (req,res)=>{
    try {
        const {id}=req.params

        let review= await Review.find({productId:id})
        .populate({
            path:"userId",
            select:"name"
        })
        .populate({
            path:"replies.userId",
            select:"name"
        })

        if(!review){
              return res.status(404)
            .json({
                success: false,
                message: "Review not found"
            })
        };

        return res.status(200)
            .json({
                success: true,
                data:review,
                message: "Review  found"
            })
        
    } catch (error) {
            return res.status(500)
            .json({
                success: false,
                message: error.message
            })
        
    }
}

export { createReview, updateReview, replyReview,deleteReview,getReview }