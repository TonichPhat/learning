const bcrypt = require('bcrypt');

exports.encrypt = (plainPassword, saltRounds = 10) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(plainPassword, salt);
};

exports.compare = (plainPassword, hash) => {
  return bcrypt.compareSync(plainPassword, hash);
};
