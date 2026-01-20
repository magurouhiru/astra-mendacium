import * as v from "valibot";

export const textSchema = v.pipe(v.string(), v.minLength(1), v.maxLength(255));
