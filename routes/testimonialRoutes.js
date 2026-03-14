import express from "express";
import Testimonial from "../models/testimonialModel.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* GET APPROVED TESTIMONIALS (PUBLIC) */

router.get("/", async (req, res) => {

  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    const skip = (page - 1) * limit;

    const [testimonials, total] = await Promise.all([

      Testimonial.find({ isApproved: true, isActive: true })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),

      Testimonial.countDocuments({ isApproved: true, isActive: true })

    ]);

    res.status(200).json({
      success: true,
      testimonials,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching testimonials",
      error: error.message
    });

  }

});


/* SUBMIT TESTIMONIAL (USER) */

router.post("/", async (req, res) => {

  try {

    const {
      clientName,
      clientEmail,
      quote,
      rating,
      serviceUsed,
      result
    } = req.body;

    const testimonial = await Testimonial.create({
      clientName,
      clientEmail,
      quote,
      rating,
      serviceUsed,
      result,
      isApproved: false,
      isActive: true
    });

    res.status(201).json({
      success: true,
      message: "Testimonial submitted successfully. Waiting for admin approval.",
      testimonial
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error submitting testimonial",
      error: error.message
    });

  }

});

export default router;