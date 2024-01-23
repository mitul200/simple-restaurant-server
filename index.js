const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
const categories = require("./data/categories.json");
const items = require("./data/items.json"); 

const auhtor = require('./data/author.json')

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/author", (req, res)=>{
  res.send(auhtor)
})
app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  const singleItems = items.find((n) => n.category_id == id);
  res.send(singleItems);
  console.log(id)
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(items);
  } else {
    const categoriesItems = items.filter((n) => parseInt(n.category_id) == id);
    res.send(categoriesItems);
  }
});

app.get("/items", (req, res) => {
  res.send(items);
});

app.get("/", (req, res) => {
  res.send("restaurant server is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
