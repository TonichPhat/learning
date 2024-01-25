const { BadRequestException } = require('@common/exception/http.exception');
const { User } = require('@models/index');
const { hash } = require('@common/helper/index');

exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, attributes: ['email', 'password'], raw: true });
    if (!user) throw new BadRequestException('User does not exist!');
    if (!hash.compare(password, user.password)) throw new BadRequestException('Account is invalid!');
    return res.success({ data: user });
  } catch (e) {
    return next(e);
  }
};
