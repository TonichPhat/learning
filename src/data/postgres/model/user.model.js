const { Model, DataTypes } = require('sequelize');
const hash = require('@common/helper/hash');

module.exports = (sequelize) => {
  class User extends Model {
    static associate({ Profile }) {
      this.belongsTo(Profile, { foreignKey: 'profile_id' });
    }

    static async $duplicateEmailThrow(email, notId) {
      const row = await this.findOne({ where: { email }, attributes: ['id', 'email'], raw: true });
      if (row && row.id !== +notId) {
        throw new Error('Email already exists');
      }
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('password', hash.encrypt(value));
        },
      },
      email: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      profile_type: {
        type: DataTypes.STRING,
      },
      profile_id: {
        type: DataTypes.BIGINT,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: 'users',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return User;
};
