const { User, Profile } = require('@/data/postgres/model');
const { BadRequestException } = require('@common/exception/http.exception');

const userService = require('./user.service');

exports.findAndCountAllUser = async (req, res, next) => {
  try {
    const users = await User.findOne({
      attributes: { exclude: ['password'] },
      include: [Profile],
    });
    if (!users) throw new BadRequestException('No Users Found!');
    return res.success({ data: { users } });
  } catch (e) {
    return next(e);
  }
};

exports.createOneUser = async (req, res, next) => {
  try {
    const customerDto = req.body;
    await User.$duplicateEmailThrow(customerDto.email);
    const user = await userService.createOneUser(customerDto);
    return res.success({ data: user });
  } catch (e) {
    return next(e.message);
  }
};
