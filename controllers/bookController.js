const Book = require("../models/Book");

const allBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ books });
};

const getBook = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.status(200).json({ book });
};

const createBook = async (req, res) => {
  const author = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const book = await Book.create({ author, quantity, description });

  res.status(201).json({ book });
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ book });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.status(204);
};

module.exports = {
  allBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
