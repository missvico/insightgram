const router = require("express").Router();
const { validarToken } = require("../middlewares/tokenControllers");
const userControllers = require("../controllers/userControllers");

router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.put("/feeds/subscribe", userControllers.subscribeFeeds);
router.put("/feeds/unsubscribe", userControllers.unsubscribeFeeds);

module.exports = router;
