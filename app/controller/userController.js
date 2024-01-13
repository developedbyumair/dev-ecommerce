import userModel from "../models/userModal.js";

export const userRegister = async (req, res) => {
  console.log("req.body", req.body);
  const { name, email, password, address, role } = req.body;

  // validation
  if (!name) return res.status(400).json({ message: "Name is required" });
  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!password)
    return res.status(400).json({ message: "Password is required" });
  if (!address) return res.status(400).json({ message: "Address is required" });
  // existing user
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser)
    return res.status(400).json({ message: "User already exists" });
  // create new user
  const user = new userModel({
    name,
    email,
    password,
    address,
    role,
  });
  user.save();
  res.status(200).json({ message: "User created successfully" });
};
