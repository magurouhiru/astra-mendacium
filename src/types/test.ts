import * as v from "valibot";
import { textShortSchema } from "@/types/common";
import { minLengthArrayMessage, toNullIfEmpty } from "@/utils/validators";

export type TestSchema = v.InferOutput<typeof testSchema>;
export const testSchema = v.object({
  test1: toNullIfEmpty(textShortSchema),
  test2: v.pipe(
    v.array(v.object({ test2Item: toNullIfEmpty(textShortSchema) })),
    v.transform((list) => list.filter((item) => item.test2Item !== null)),
    v.minLength(1, minLengthArrayMessage),
  ),
});
