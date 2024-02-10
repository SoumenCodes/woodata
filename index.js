const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080; // Choose port from here like 8080, 3001

// Sample data
let posts = [
  { id: 1, title: 'Post 1', body: 'This is the first post.' },
  { id: 2, title: 'Post 2', body: 'This is the second post.' },
  { id: 3, title: 'Post 3', body: 'This is the third post.' }
];

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to get all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Route to get a single post by id
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Route to create a new post
app.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Route to update an existing post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts[index] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Route to delete a post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
