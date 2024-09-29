import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const tripreg = async (req, res) => {
  try {
    const { 
        firstname,
        lastname,
        phonenumber,
        email,
        traveldate,
        numberofmember,
        adharcardnumber,
        additionalinformation 
    } = req.body;

    // Validate input data
    if (!firstname || !lastname ||!phonenumber || !email || !traveldate || !numberofmember || !adharcardnumber || !additionalinformation ) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const createdUser = new User({
        firstname,
        lastname,
        phonenumber,
        email,
        traveldate,
        numberofmember,
        adharcardnumber,
        additionalinformation 
    });
  
    await createdUser.save();
    res.status(201).json({ message: "User created successfully",
      user:{
        firstname: createdUser.firstname,
        lastname:createdUser.lastname,
        phonenumber:createdUser.phonenumber,
        email:createdUser.email,
        
    } });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};