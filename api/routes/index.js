const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const tweetRouter = require('./tweet.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/tweet', tweetRouter)

module.exports = router