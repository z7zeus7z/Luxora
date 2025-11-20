import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//Register
export const registerUser = async (req,res) => {
 try
 {
    const {name,email,password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already exists"});
    }
    const user = await User.create({name,email,password});

    if(email=== process.env.ADMIN_EMAIL){
        user.isAdmin = true;
        await user.save();
    }

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        });
    }
    else{
        res.status(400).json({message:"Invalid user data"});
    }
 }
 catch(error)
 {
    res.status(500).json({message:error.message});
 }
};
//Login
export const loginUser = async (req,res) => {
 try
 {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        });
    }else{
        res.status(401).json({message:"Invalid email or password"});
    }
 }
 catch(error)
 {
    res.status(500).json({message:error.message});
 }
    
};
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { firstName, lastName, displayName, email, password } = req.body;

    // Combine first + last name for "name" field
    const fullName = displayName || `${firstName || ""} ${lastName || ""}`.trim();

    user.name = fullName;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};