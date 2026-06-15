import joi from "joi";

export const signup = joi.object({
  username: joi.string().min(3).max(40).required(),
  email: joi
    .string()
    .required()
    .email({
      tlds: { allow: ["net", "com"] },
      minDomainSegments: 2,
      maxDomainSegments: 3,
    }),
  password: joi.string().min(6).max(40).required(),
});

export const login = joi.object({
  email: joi
    .string()
    .required()
    .email({
      tlds: { allow: ["net", "com"] },
      minDomainSegments: 2,
      maxDomainSegments: 3,
    }),
  password: joi.string().min(6).max(40).required(),
});
