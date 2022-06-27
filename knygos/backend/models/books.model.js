const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;