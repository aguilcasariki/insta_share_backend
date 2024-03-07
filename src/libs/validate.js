// validate.js
const validate = (type, value) => {
  switch (type) {
    case 'username':
      if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
        return { valid: false, message: 'Username must contain only letters, numbers, underscores, or hyphens.' };
      }
      break;
    case 'password':
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
        return { valid: false, message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.' };
      }
      break;
    case 'email':
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
        return { valid: false, message: 'Email must be a valid email address.' };
      }
      break;
    default:
      return { valid: false, message: 'Invalid type' };
  }
  return { valid: true };
};

export default validate;
