module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   */
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
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
    });
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
