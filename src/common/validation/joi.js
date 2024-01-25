const Joi = require('joi');

exports.dtoAsync = async (req, schema, opts = {}) => {
  req.body = await schema.validateAsync(req.body, {
    abortEarly: false,
    stripUnknown: true,
    ...opts,
  });
};

exports.Joi = Joi;
