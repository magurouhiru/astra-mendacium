import * as v from "valibot";
import { textShort } from "@/types/common";
import { toNullIfEmpty } from "@/utils/validators";

export const settingSchema = v.object({
  text: toNullIfEmpty(textShort),
  array: v.array(textShort),
});
