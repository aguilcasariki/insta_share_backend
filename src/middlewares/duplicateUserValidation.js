import findUserController from '../controllers/findUser.controller.js';

export default async (req, res, next) => {
  const { username, email } = req.body;
  // Check if the user already exists by username or email in a single query
  const user = await findUserController({ username, email }, [
    'username',
    'email',
  ]);

  if (user) {
    // Determine if the username or email already exists
    const message = user.username === username
      ? 'Username already exists'
      : 'Email already exists';
    return res.status(400).json({ message });
  }
  return next();
};
