const router = require('express').Router()
const { validarToken } = require('../middlewares/tokenControllers')
const feedsControllers = require('../controllers/feedsControllers')

router.get('/', validarToken,feedsControllers.getFeeds)

module.exports = router
