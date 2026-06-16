import joi from "joi";
export const addnote = joi.object({
  description: joi.string().min(2).max(1000).required(),
});
