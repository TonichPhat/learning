const { sequelize, Profile, User } = require('@models/index');
exports.createOneUser = async (customerDto) => {
  return await sequelize.transaction(async () => {
    let customer = await Profile.create({
      first_name: customerDto.first_name,
      last_name: customerDto.last_name,
      gender: customerDto.gender,
      date_of_birth: customerDto.date_of_birth,
    });
    let user = await User.create({
      username: customerDto.username,
      password: customerDto.password,
      email: customerDto.email,
      phone_number: customerDto.phone_number,
      profile_id: customer.id,
    });
    customer = customer.toJSON();
    user = user.toJSON();
    delete user.password;
    return { ...user, profile: customer };
  });
};
