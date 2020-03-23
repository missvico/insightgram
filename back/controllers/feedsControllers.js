const feedsControllers = {}
const feedsData = require('../feedsData.json')

feedsControllers.getFeeds = (req, res) => {
  res.json(feedsData)
}

module.exports = feedsControllers
