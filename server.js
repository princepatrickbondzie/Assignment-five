const express = require("express");

const app = express();

app.use(express.json());
app.use("/books", require("./router/bookRouter"));

app.listen(4000, () => console.log("my Bookshop is up and running"))