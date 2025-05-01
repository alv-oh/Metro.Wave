import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Reviews.css"; // Add a CSS file for custom styling

const reviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Amazing products! The quality is top-notch, and the service is excellent.",
        date: "April 20, 2025",
    },
    {
        id: 2,
        name: "Jane Smith",
        rating: 4,
        comment: "Great experience overall. The delivery was fast, and the products were as described.",
        date: "April 18, 2025",
    },
    {
        id: 3,
        name: "Michael Brown",
        rating: 5,
        comment: "I love shopping here! The prices are unbeatable, and the customer support is fantastic.",
        date: "April 15, 2025",
    },
];

const Reviews = () => {
    return (
        <div className="reviews-page">
            <Navbar />
            <div className="container my-5">
                <h2 className="text-center mb-4">Customer Reviews</h2>
                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <h5 className="review-name">{review.name}</h5>
                            <p className="review-date">{review.date}</p>
                            <div className="review-rating">
                                {"⭐".repeat(review.rating)}
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Reviews;