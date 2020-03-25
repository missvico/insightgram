const userControllers = {};
const { users } = require("../models/index");
const { crearToken } = require("../middlewares/tokenControllers");

userControllers.registerUser = (req, res) => {
  users
    .create(req.body)
    .then(user => {
      const token = crearToken(user);
      res.status(200).send(token);
    })
    .catch(err => res.sendStatus(404));
};

userControllers.loginUser = (req, res) => {
  users
    .findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) res.send({ err: "Email does not exist" });
      if (!user.validPassword(req.body.password))
        res.send({ err: "Incorrect password" });
      else {
        const token = crearToken(user);
        req.user = user;
        res.status(200).send(token);
      }
    })
    .catch(err => res.sendStatus(404));
};

module.exports = userControllers;
