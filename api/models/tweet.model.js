const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Tweet = sequelize.define(
  'tweet',
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tweet_date: {
      type: DataTypes.DATE
    }
  },
  { timestamps: false }
)

module.exports = Tweet