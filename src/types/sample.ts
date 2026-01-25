import * as v from "valibot";
import { zodiacSignSchema } from "@/types/common";
import { toNullIfEmpty } from "@/utils/validators";

export type SampleSchema = v.InferOutput<typeof sampleSchema>;
export const sampleSchema = v.object({
  zodiacSign: v.pipe(toNullIfEmpty(zodiacSignSchema), zodiacSignSchema),
});
