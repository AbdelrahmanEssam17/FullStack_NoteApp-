import * as z from "zod";

const addnote = z.object({
  description: z.string().trim().min(2),
});
export { addnote };
