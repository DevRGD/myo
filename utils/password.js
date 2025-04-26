const bcrypt = await import('bcryptjs');

export const HashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const ComparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
