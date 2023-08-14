const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email and/or password!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email and/or password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, { reviewText, reviewUser }) => {
      const review = await Review.create({ reviewTest, reviewUser });

      await User.findOneAndUpdate(
        { username: reviewUser },
        { $addToSet: { reviews: review._id } }
      );

      return review;
    },

    addComment: async (parent, { reviewId, commentText, commentAuthor }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReview: async (parent, { reviewId }) => {
      return Review.findOneAndDelete({ _id: reviewId });
    },
    removeComment: async (parent, { reviewId, commentId }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
