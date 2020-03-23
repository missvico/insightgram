const router = require("express").Router();

router.use("/user", require("./user"));
router.use('/feeds', require('./feeds'))

module.exports = router;
