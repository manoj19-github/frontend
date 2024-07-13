import * as Zod from "zod";
export const loginFormSchema = Zod.object({
  role_id: Zod.string().min(1).trim(),
  email_id: Zod.string().email(),
  password: Zod.string().min(6).max(10),
});
