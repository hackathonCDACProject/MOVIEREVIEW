
const express = require('express');
// const cors = require('cors');

// const pool = require('./Config/db'); 

// const app = express();
// const PORT = 5000;


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const reviewRoutes = require('./routes/reviewRoutes');


// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Use review routes
// app.use('/api', reviewRoutes);



// // Middleware
// app.use(cors());
// app.use(express.json());
// const createResult = (error, data) => {
//     if (error) {
//         return {
//             status: 'error',
//             message: 'Database query failed',
//             error: error.message
//         };
//     } else {
//         return {
//             status: 'success',
//             data: data
//         };
//     }
// };

// // Define the root route to fetch movie reviews
// app.get('/', (req, res) => {
//     const sql = `SELECT movie_name, review_text, rating FROM review`;
//     pool.query(sql, (err, data) => {
//         // Send the result using the helper function
//         res.send(createResult(err, data));
//     });
// });


// Start the server
app.listen(5000,'localhost', () => {
    console.log(`Server started at http://localhost:5000`);
});
