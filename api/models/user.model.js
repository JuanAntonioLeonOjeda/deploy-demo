const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const {
  is18
} = require('../utils/validations')

const User = sequelize.define(
  'user',
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        checkAge(value) {
          if (!is18(value)) {
            throw new Error('User must be at least 18 years old')
          }
        }
      }
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    }
  },
  { timestamps: false }
)

module.exports = User