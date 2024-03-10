export default (v) =>
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    v
  ) &&
  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
