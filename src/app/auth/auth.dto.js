const { Joi, dtoAsync } = require('@common/validation/joi');

exports.userLoginDto = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      email: Joi.string().email().trim().max(255).lowercase().required(),
      password: Joi.string().min(6).trim().required(),
    });

    await dtoAsync(req, schema);
    return next();
  } catch (e) {
    return next(e);
  }
};
