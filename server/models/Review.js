const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const reveiwSchema = new Schema({
    review: {
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
              createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
              },
            },
          ],
        });
const Review = model('Review',reveiwSchema);

module.exports = Review;