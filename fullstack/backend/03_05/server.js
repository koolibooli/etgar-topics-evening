let express = require("express");
let productRouter = require("./routes/product");
const app = express();

app.use(express.json());

// connect the products routes
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Express Routing");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
