import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, mobilenumber, email, password, confirm } = req.body;

    // Validate input data
    if (!username || !mobilenumber || !email || !password || !confirm) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    if (password !== confirm) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      username,
      mobilenumber,
      email,
      password: hashedPassword,
      confirm:hashedPassword
    });
  
    await createdUser.save();
    res.status(201).json({ message: "User created successfully",
      user:{
        _id:createdUser._id,
        username:createdUser.username,
        mobilenumber:createdUser.mobilenumber,
        email:createdUser.email,
        password:createdUser.password,
        confirm:createdUser.confirm
    } });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};