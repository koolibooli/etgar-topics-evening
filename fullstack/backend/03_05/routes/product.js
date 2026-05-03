const express = require("express");

const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 4000 },
  { id: 2, name: "Mouse", price: 100 },
  { id: 3, name: "Keyboard", price: 250 }
];

// GET /products
router.get("/", (req, res) => {
  res.json(products);
});

// GET /products/search?name=lap
router.get("/search", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({
      error: "Please provide a name"
    });
  }

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(results);
});

// GET /products/:id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  res.json(product);
});

// POST /products
router.post("/add", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created",
    product: newProduct
  });
});

// DELETE /products/:id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);

  res.json({
    message: "Product deleted"
  });
});

module.exports = router;