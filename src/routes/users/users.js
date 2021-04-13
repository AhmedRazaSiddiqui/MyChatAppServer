const express = require("express");
var userRouter = express.Router();
var UserModal = require("./userModal");

userRouter.post("/All", async (req, res) => {
  let a = await UserModal.find();
  res.send(a);
});

userRouter.get("/All", async (req, res) => {
  let a = await UserModal.find();
  res.send(a);
});

userRouter.post("/User/:Name", async (req, res) => {
  let a = await UserModal.find({ name: req.params.Name });
  res.send(a);
});

userRouter.post("/createUser", async (req, res) => {
  let isUserAlreadyExits = await UserModal.find({
    username: req.params.username,
  });
  if (isUserAlreadyExits.length > 0) {
    res.send({ error: "user Alrady Exits" });
  } else {
    const NewUser = new UserModal({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
    });
    let a = await NewUser.save();
    res.send(a);
  }
});

userRouter.post("/SigIn", async (req, res) => {
  let isUserAlreadyExits = await UserModal.find({
    username: req.body.username,
    password: req.body.password,
  });
  res.send(isUserAlreadyExits);
});

module.exports = userRouter;
