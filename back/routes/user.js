const router = require("express").Router();
const { crearToken, validarToken } = require("../middlewares/tokenControllers");
const { users } = require("../models/index");

router.post("/register", (req, res) => {
  users.create(req.body).then(() => {
    res.sendStatus(200);
  });
});

router.post("/login", (req, res) => {
  users.findOne({ where: { email: req.body.email } }).then(user => {
    if (!user) res.sendStatus(401);
    if (!user.validPassword(req.body.password)) res.sendStatus(401);
    else {
      const token = crearToken(user);
      req.user = user;
      res.status(200).json(token);
    }
  });
});

router.get("/login", validarToken, (req, res) => {
  res.status(200).send("TOKEN");
});

module.exports = router;
