export const userRegister = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  // validation
  if (!name) return res.status(400).json({ message: "Name is required" });
};
