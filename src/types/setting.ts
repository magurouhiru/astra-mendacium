import * as v from "valibot";
import { textShort } from "@/types/common";
import { minLengthArray, toNullIfEmpty } from "@/utils/validators";

export const settingSchema = v.object({
  text: toNullIfEmpty(textShort),
  array: v.pipe(
    v.array(v.object({ aa: toNullIfEmpty(textShort) })),
    v.transform((list) => list.filter((item) => item.aa !== null)),
    v.minLength(1, minLengthArray),
  ),
});

export type SettingSchema = v.InferOutput<typeof settingSchema>;
