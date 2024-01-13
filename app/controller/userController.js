export const userRegister = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  // validation
  if (!name) return res.status(400).json({ message: "Name is required" });
  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!password)
    return res.status(400).json({ message: "Password is required" });
  if (!address) return res.status(400).json({ message: "Address is required" });
};
