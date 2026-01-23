import * as v from "valibot";
import { textShort } from "@/types/common";

export const settingSchema = v.object({
  text: textShort,
});
