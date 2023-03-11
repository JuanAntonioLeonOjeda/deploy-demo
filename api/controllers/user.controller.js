const User = require('../models/user.model')
const Tweet = require('../models/tweet.model')

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'], //no mostrar contraseña en la respuesta
      },
      include: [Tweet]  //Incluir los tweets asociados  EAGER LOADING
    })

    if (!users) return res.status(404).send('No users found')

    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)

    const tweets = await user.getTweets()  //LAZY LOADING
    // where: {
    //   id: 4   esto nos permite buscar un amigo en concreto
    // }

    if (!user) return res.status(404).send('User not found')

    return res.status(200).json({ user: user, tweets: tweets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function searchUser(req, res) {
  try {
    const user = await User.findOne({
      where: {
        user_name: req.body
      },
      attributes: {
        exclude: ['password', 'role']
      }
    })

    if (!user) return res.status(404).send('User not found')

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id, {
      attributes: {
        exclude: ['password']
      }
    })

    if (!user) return res.status(404).send('User not found')

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const [, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })

    if (user) {
      return res.status(200).json({ msg: 'User updated', user: user })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnProfile(req, res) {
  try {
    const [, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: res.locals.user.id
      }
    })

    if (user) {
      return res.status(200).json({ msg: 'User updated', user: user })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    })

    return res.status(200).json({ msg: `User deleted` })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Vincular un elemento ya existente con otro ya existente también (Many to Many)
// async function addPet(req, res) {
//   try {
//     const user = await User.findByPk(res.locals.user.id)
//     const pet = await Pet.findByPk(req.params.id)
//     await user.addPet(pet)
//     await pet.addUser(user)

//     return res.status(200).json({ msg: `Friend added` })
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

module.exports = {
  getAllUsers,
  getOneUser,
  searchUser,
  getProfile,
  updateUser,
  updateOwnProfile,
  deleteUser
}