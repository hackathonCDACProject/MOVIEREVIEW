import React, { useState } from 'react';

 import './Review.css'; 

const ReviewPage = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (rating === 0 || !reviewText.trim() || !movieTitle.trim()) {
            alert("Please provide a movie title, rating, and review.");
            return;
        }

        const newReview = {
            id: Date.now(), 
            title: movieTitle,
            rating: rating,
            text: reviewText,
        };

       
        setReviews([newReview, ...reviews]); 

        
        setMovieTitle('');
        setRating(0);
        setReviewText('');
    };

    const renderStars = (currentRating, onClickHandler = null) => {
        return [...Array(5)].map((star, index) => {
            const value = index + 1;
            const isFilled = value <= currentRating;
            return (
                <span
                    key={value}
                    className={`star ${isFilled ? 'selected' : ''}`}
                    onClick={onClickHandler ? () => onClickHandler(value) : null}
                    style={{ cursor: onClickHandler ? 'pointer' : 'default' }}
                >
                    
                    <i className={isFilled ? 'fas fa-star' : 'far fa-star'}></i>
                </span>
            );
        });
    };

    return (
        <div className="container">
            <h1>Submit Your Movie Review</h1>
            <div className='review-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="movieTitle">Movie Title:</label>
                    <input
                        type="text"
                        id="movieTitle"
                        value={movieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Rating:</label>
                    <div className="star-rating">
                        {renderStars(rating, handleStarClick)}
                    </div>
                    <input type="hidden" id="rating" value={rating} />
                </div>
                <div className="form-group">
                    <label htmlFor="reviewText">Your Review:</label>
                    <textarea
                        id="reviewText"
                        rows={5}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>

            <div className="reviews-container">
                <h2>Recent Reviews</h2>
                <div id="reviewList">
                    {reviews.map((review) => (
                        <div key={review.id} className="review">
                            <div className="review-title">{review.title}</div>
                            <div className="review-rating">
                                {renderStars(review.rating)}
                                {` (${review.rating}/5)`}
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReviewPage;
