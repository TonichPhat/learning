const { Joi, dtoAsync } = require('@common/validation/joi');
const { AccountGender } = require('@common/constant/enum.constant');

exports.createOneUserDto = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      first_name: Joi.string().trim().max(255).required(),
      last_name: Joi.string().trim().max(255).required(),
      gender: Joi.valid(AccountGender.Male, AccountGender.Female, AccountGender.Other),
      date_of_birth: Joi.date(),
      username: Joi.string().trim().required(),
      password: Joi.string().min(6).trim().required(),
      email: Joi.when('phone_number', {
        is: Joi.string().required(),
        then: Joi.string().email().trim().max(255).lowercase().allow('', null).empty(''),
        otherwise: Joi.string().email().trim().max(255).lowercase().required(),
      }),
      phone_number: Joi.string().allow('', null).empty(''),
    });

    await dtoAsync(req, schema);
    return next();
  } catch (e) {
    return next(e);
  }
};
