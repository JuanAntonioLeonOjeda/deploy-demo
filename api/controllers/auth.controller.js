const User = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup(req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    const user = await User.create(req.body,
      {
        fields: ['user_name', 'email', 'password', 'birth_date' ] //Definimos los campos que pueden rellenar.
      }
    )

    const payload = { email: user.email, userName: user.userName }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    return res.status(200).json({ msg: 'User created', token: token })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) return res.status(404).send('Email or password incorrect')

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) return res.status(500).send(err)
      if (!result) return res.status(404).send('Email or password incorrect')

      const payload = { email: user.email, userName: user.userName }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
      return res.status(200).json({ token: token })
    })

  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  signup,
  login
}