module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   */
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('profiles', {
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
    });
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    await queryInterface.dropTable('profiles');
  },
};
