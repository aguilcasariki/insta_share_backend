import User from "../models/user.model.js";

export default async (user, fields = ["username"]) => {
  const $or = fields.map((field) => ({ [field]: user[field] }));
  return User.findOne({
    $or,
  });
};
