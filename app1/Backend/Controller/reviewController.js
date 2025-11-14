
const Review = require('../Models/reviewmodel');

const getAllReviews = (req, res) => {
  Review.getAllReviews((err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving reviews.' });
    }
    res.status(200).json(result);
  });
};

const getReviewById = (req, res) => {
  const id = req.params.id;
  Review.getReviewById(id, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving review.' });
    }
    if (!result.length) {
      return res.status(404).send({ message: 'Review not found.' });
    }
    res.status(200).json(result[0]);
  });
};

const createReview = (req, res) => {
  const { movie_name, review_text, rating } = req.body;

Review.updateReview(id, movie_name, review_text, rating, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error updating review.' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: 'Review not found.' });
    }
    res.status(200).send({ message: 'Review updated successfully!' });
  });
};

const deleteReview = (req, res) => {
  const id = req.params.id;
  Review.deleteReview(id, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error deleting review.' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: 'Review not found.' });
    }
    res.status(200).send({ message: 'Review deleted successfully!' });
  });
};

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview }