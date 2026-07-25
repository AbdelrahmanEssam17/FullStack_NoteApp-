import * as z from "zod";

const register = z.object({
  username: z.string().min(3).trim(),
  email: z.string().email().trim(),
  password: z.string().min(6),
});

const login = z.object({
  email: z.string().email().trim(),
  password: z.string().min(3),
});

const otp = z.object({
  otp: z.string().length(6),
  email: z.string().email().trim(),
});

export { register, login, otp };
