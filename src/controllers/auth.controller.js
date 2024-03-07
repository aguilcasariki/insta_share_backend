import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import validate from '../libs/validate.js';

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const validations = ['username', 'password', 'email'].map((field) => ({ field, validation: validate(field, req.body[field]) }));
    validations.forEach(({ validation }) => {
      if (!validation.valid) {
        return res.status(400).json({ message: validation.message });
      }
      return true;
    });
    // Check if the user already exists by username or email in a single query
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],

    });
    if (existingUser) {
      // Determine if the username or email already exists
      const message = existingUser.username === username
        ? 'Username already exists'
        : 'Email already exists';
      return res.status(400).json({ message });
    }

    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    return res.status(201).json({
      username: user.username,
      email: user.email,

    });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user', error });
  }
};

export default register;
