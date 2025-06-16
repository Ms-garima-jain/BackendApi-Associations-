import Product from "../Model/product.model.js";
import Review from "../Model/review.model.js";


// Bulk insert reviews
export const bulkInsertReviews = async (req, res) => {
  try {
    const reviews = req.body;

    const insertedReviews = await Review.bulkCreate(reviews, { validate: true });

    res.status(201).json({ message: "Reviews inserted successfully", data: insertedReviews });
  } catch (error) {
    console.error("Error inserting reviews:", error);
    res.status(500).json({ error: "Failed to insert reviews", details: error.message });
  }
};


export const getReviewsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const reviews = await Review.findAll({
      where: { userId },
    //   include: [
    //     {
    //       model:Product,
    //       attributes: ['id', 'title', 'description', 'price'], 
    //     },
    //   ],
    });

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this user." });
    }

    res.status(200).json({ message: "Reviews fetched successfully", data: reviews });
  } catch (error) {
    console.error("Error fetching reviews by user:", error);
    res.status(500).json({ message: "Failed to fetch reviews", error: error.message });
  }
};