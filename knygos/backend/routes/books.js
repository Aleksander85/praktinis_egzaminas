const router = require('express').Router();
let Books = require('../models/books.model');

router.route('/').get((req, res) => {
  Books.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const quantity = Number(req.body.quantity);
  const date = Date.parse(req.body.date);

  const newBooks = new Books({
    username,
    description,
    quantity,
    date,
  });

  newBooks.save()
  .then(() => res.json('Book added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Books.findById(req.params.id)
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Boooks.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Books.findById(req.params.id)
    .then(books => {
      books.username = req.body.username;
      books.description = req.body.description;
      books.quantity = Number(req.body.quantity);
      books.date = Date.parse(req.body.date);

      books.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;