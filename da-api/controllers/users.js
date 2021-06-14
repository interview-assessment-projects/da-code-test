const mongoose = require("mongoose");
const User = mongoose.model("user");
const emailGenerator = require("./email");

// POST: /addUser - adds a new user to list
const addUser = async (req, res) => {
  const userMessageDetails = new User({
    name: req.body.sender,
    email: req.body.address,
    message: req.body.content,
  });
  User.create(userMessageDetails)
    .then((userMessageDetails) => {
      if (!userMessageDetails) {
        return res.status(404).send({
          message: "User not added with name: " + req.body.sender,
        });
      }
      emailGenerator.sendEmail(userMessageDetails.name, userMessageDetails.email, userMessageDetails.message);
      res.send(userMessageDetails);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not added with name: " + req.body.sender,
        });
      }
      return res
        .status(500) // server error
        .json(err.message);
    });
};

module.exports = {
  addUser
};
