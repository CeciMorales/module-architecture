const User = require("../models/User");

exports.getUsers = async (req, res) => {
  await User.all().then((users) => {
    res.json(users);
  });
};

exports.getUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  await User.find(email, password)
    .then((user) => {
      console.log(user);
      if (user != undefined) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json("Hay un error en los datos");
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json("No encontrado");
    });
};

exports.createUser = async (req, res) => {
  let user = {};
  user.email = req.body.email;
  user.password = req.body.password;
  user.userType = req.body.userType;
  await User.create(user).then((id) => {
    console.log("User created with id: ", id);
    res.json({ id: id });
  });
};
