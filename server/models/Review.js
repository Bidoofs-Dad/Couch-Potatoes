const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    reviewText: {
      type: String,
      required:'You need to leave a review!',
      trim: true,
      minlength: 1,
      maxlength: 750,
    },
    reviewUser: {
        type: String,
        required: true,
        trim: true
    },
    gameId: {
      type: String,
      required: true
    },
    gameName: {
      type: String,
      required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
              },
              commentAuthor: {
                type: String,
                required: true,
              },
              createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
              },
            },
          ],
        });
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;