export default (v) =>
  !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) &&
  "Email must be a valid email address.";
