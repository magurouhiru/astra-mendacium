import * as v from "valibot";
import { zodiacSignSchema } from "@/types/common";
import { toNullIfEmpty } from "@/utils/validators";

export type SettingSchema = v.InferOutput<typeof settingSchema>;
export const settingSchema = v.object({
  zodiacSign: toNullIfEmpty(zodiacSignSchema),
});
