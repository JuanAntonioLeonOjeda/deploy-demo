const router = require('express').Router()

const {
  getAllTweets,
  getOneTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('../controllers/tweet.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.get('/', checkAuth, checkAdmin, getAllTweets)
router.get('/:id', checkAuth, getOneTweet)

router.post('/', checkAuth, postTweet)

router.patch('/:id', checkAuth, checkAdmin, updateTweet)

router.delete('/:id', checkAuth, checkAdmin, deleteTweet)

module.exports = router