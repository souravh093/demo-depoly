const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello bangladesh");
});

app.get("/s", (req, res) => {
  res.send("another route");
});


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
