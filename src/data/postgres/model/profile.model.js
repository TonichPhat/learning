const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Profile extends Model {
    static associate({ User }) {
      this.hasOne(User, {
        foreignKey: 'profile_id',
        constraints: false,
      });
    }
  }

  Profile.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: 'profiles',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return Profile;
};
