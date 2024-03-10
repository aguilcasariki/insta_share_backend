export default (v) =>
  !/^[a-zA-Z0-9_-]+$/.test(v) &&
  "Username must contain only letters, numbers, underscores, or hyphens.";
