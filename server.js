const express = require('express');
const app = express();
app.use(express.json());

// ------------------- PART A -------------------

// View all books
app.get('/books', (req, res) => {
  const books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 3, title: 'Deep Work', author: 'Cal Newport' }
  ];
  res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
  res.json({ message: 'Book added successfully!' });
});

// View all users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', membership: 'Premium' },
    { id: 2, name: 'Bob', membership: 'Standard' }
  ];
  res.json(users);
});

// Add new user
app.post('/users', (req, res) => {
  res.json({ message: 'User subscribed successfully!' });
});

// Borrow a book
app.post('/borrow', (req, res) => {
  res.json({ message: 'Book borrowed successfully!' });
});

// Return a book
app.post('/return', (req, res) => {
  res.json({ message: 'Book returned successfully!' });
});


// ------------------- PART B -------------------

// Fetch specific book by ID
app.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params;
  res.json({ id: bookId, title: `Book ${bookId}`, author: 'Unknown Author' });
});

// Retrieve user borrowing history
app.get('/users/:userId/borrowed', (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
    borrowedBooks: [
      { id: 1, title: 'Atomic Habits' },
      { id: 2, title: 'The Alchemist' }
    ]
  });
});

app.listen(3000, () => console.log('📚 Library API running on http://localhost:3000'));
