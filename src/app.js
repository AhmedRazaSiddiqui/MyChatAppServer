const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/users/users");
const postRouter = require("./routes/posts/posts");
const app = express();

mongoose
  .connect(
    "mongodb+srv://Ahmed:Ahmed1997@cluster0.lctgk.mongodb.net/MyChatAPPServer?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected");
  });
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use((req, res) => {
  res.status(404).send({ error: "Not Found This end point" });
});

module.exports = app;
