const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Memo = require("./models/Memo");

mongoose.connect("mongodb://127.0.0.1:27017/memo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Memo.find((err, memos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(memos);
      console.log(memos);
    }
  });
});

app.post("/", (req, res) => {
  const memo = new Memo(req.body);
  memo
    .save()
    .then((memo) => {
      res.json(memo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(id);
  Memo.deleteOne({ _id: id }, function () {
    console.log("Deleted " + id);
    Memo.find((err, memos) => {
      if (err) {
        console.log(err);
      } else {
        console.log(memos);
      }
    });
  });
});

app.patch("/:id", (req, res) => {
  const id = req.params.id;

  Memo.updateOne({ _id: id }, { text: req.body.text }, function () {
    Memo.find((err, memos) => {
      if (err) {
        console.log(error);
      } else {
        console.log(memos);
      }
    });
  });
  res.json(id);
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
