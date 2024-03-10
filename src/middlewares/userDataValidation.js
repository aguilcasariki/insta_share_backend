import username from '../common/validators/username.js';
import email from '../common/validators/email.js';
import password from '../common/validators/password.js';

const validatorsPerField = {
  username,
  email,
  password,
};

export default async (req, res, next) => Object.keys(req.body).reduce((prevValue, currentValue) => {
  const validationResult = validatorsPerField[currentValue](
    req.body[currentValue],
  );
  if (validationResult) {
    return () => res.status(400).json({ message: validationResult });
  }

  return prevValue;
}, next)();
