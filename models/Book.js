const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, "Please provide author for the book."],
    },
    price: {
      type: Number,
      required: [true, "Please provide book price"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    description: String,
  },
  {
    trimestamps: true,
  }
);

module.exports = model("Book", bookSchema);
