const db = require('../Config/db');

const getAllReviews = (callback) => {
  db.query('SELECT * FROM reviews ORDER BY created_at DESC', callback);
};
const getReviewById = (id, callback) => {
  db.query('SELECT * FROM reviews WHERE id = ?', [id], callback);
};

const createReview = (movie_name, review_text, rating, callback) => {
  const query = 'INSERT INTO reviews (movie_name, review_text, rating) VALUES (?, ?, ?)';
  db.query(query, [movie_name, review_text, rating], callback);
};

const updateReview = (id, movie_name, review_text, rating, callback) => {
  const query = 'UPDATE reviews SET movie_name = ?, review_text = ?, rating = ? WHERE id = ?';
  db.query(query, [movie_name, review_text, rating, id], callback);
};

const deleteReview = (id, callback) => {
  db.query('DELETE FROM reviews WHERE id = ?', [id], callback);
};

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview };
