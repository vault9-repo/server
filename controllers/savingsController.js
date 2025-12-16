import Savings from "../models/Savings.js";

export const getSavings = async (req, res) => {
  const records =
    req.user.role === "admin"
      ? await Savings.find().populate("member")
      : await Savings.find({ member: req.user._id });
  res.json(records);
};

export const addSavings = async (req, res) => {
  const { member, date, amount } = req.body;
  const record = await Savings.create({
    member,
    date,
    amount,
    createdBy: req.user._id,
  });
  res.json(record);
};
