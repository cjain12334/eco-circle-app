const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 2);
    const newUser = new User({ name, email, password: hashedPassword}); // Automatically verify
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); // Generate token

    res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error during signup', error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Generate token
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
};
