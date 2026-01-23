import * as v from "valibot";
import { maxLengthString, minLengthString } from "@/utils/validators";

export const textShort = v.pipe(
  v.string(),
  v.minLength(1, minLengthString),
  v.maxLength(10, maxLengthString),
);
