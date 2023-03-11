const User = require('../api/models/user.model')
const Tweet = require('../api/models/tweet.model')

function addRelations() {
  try {

    //One to Many:
    User.hasMany(Tweet)
    Tweet.belongsTo(User)

    // One to One:
    // movie.hasOne(awards)
    // awards.belongsTo(movie)

    // Many to Many:
    // movie.belongsToMany(actor, { through: 'Movie_Actor' })
    // actor.belongsToMany(movie, { through: 'Movie_Actor' })

    //Many to Many para una tabla consigo misma:
    // Pet.belongsToMany(Pet, { as: 'Friend', through: 'Friends' })

  } catch (error) {
    throw error
  }
}

module.exports = addRelations