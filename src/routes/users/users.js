const express = require("express");
var userRouter = express.Router();
var UserModal = require("./userModal");

userRouter.post("/Users", async (req, res) => {
  let a = await UserModal.find();
  res.send(a);
});

userRouter.post("/User/:Name", async (req, res) => {
  let a = await UserModal.find({ name: req.params.Name });
  res.send(a);
});
userRouter.post("/createUser", async (req, res) => {
  const NewUser = new UserModal({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
  });
  let a = await NewUser.save();
  res.send(a);
});

module.exports = userRouter;
