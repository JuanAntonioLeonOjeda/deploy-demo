const User = require('../models/user.model')
const Tweet = require('../models/tweet.model')

async function getAllTweets(req, res) {
  try {
    const tweets = await Tweet.findAll()

    if (!tweets) return res.status(404).send('No tweets found')

    return res.status(200).json(tweets)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneTweet(req, res) {
  try {
    const tweet = await Tweet.findByPk(req.params.id)

    if (!tweet) return res.status(404).send('Tweet not found')

    return res.status(200).json({ tweet: tweet })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


async function postTweet(req, res) {
  try {
    const author = await User.findByPk(res.locals.user.id)
    const tweet = await Tweet.create({
      text: req.body.text,
      tweet_date: Date.now()
    })
    
    await author.addTweet(tweet)

    return res.status(200).json({ msg: 'tweet posted!'})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateTweet(req, res) {
  try {
    const [, tweet] = await Tweet.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })

    if (tweet) {
      return res.status(200).json({ msg: 'Tweet updated', tweet: tweet })
    } else {
      return res.status(404).send('Tweet not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteTweet(req, res) {
  try {
    const tweet = await Tweet.destroy({
      where: {
        id: req.params.id
      }
    })

    return res.status(200).json({ msg: `Tweet deleted` })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTweets,
  getOneTweet,
  postTweet,
  updateTweet,
  deleteTweet,
}