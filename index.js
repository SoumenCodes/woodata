const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080; // Choose port from here like 8080, 3001

// Sample data
let posts = [
 {
        "name": "Bed",
        "price": "1000",
        "dec": "Bed",
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/8/LP/JA/IM/13002005/61detbxktml-sl1081--500x500.jpg",
        "id": 1
      },
      {
        "name": "Table Set",
        "price": 700,
        "dec": "Table Set",
        "image": "https://5.imimg.com/data5/SN/PJ/OU/SELLER-65814729/wooden-furniture-items.jpg",
        "id": 2
      },
      {
        "name": "Sofa",
        "price": 700,
        "dec": "Sofa",
        "image": "https://sundaydesign.co.in/cdn/shop/files/HARSF-007.jpg?v=1697446153",
        "id": 3
      },
      {
        "name": "Office Table",
        "price": 700,
        "dec": "Office Table set",
        "image": "https://ighomall.com/image/cache/catalog/products/office-furniture/4-feet-office-table-with-3-drawers-4-feet-office-table-with-3-drawers-550x550.jpg",
        "id": 4
      }
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
