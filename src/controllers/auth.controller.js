import bcrypt from "bcryptjs";
import User from "../models/files.model.js";

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    return res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error });
  }
};

export default register;
