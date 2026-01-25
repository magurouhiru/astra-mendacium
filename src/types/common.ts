import * as v from "valibot";
import {
  maxLengthStringMessage,
  minLengthStringMessage,
  nonZodiacSigns,
} from "@/utils/validators";

export type TextShortSchema = v.InferOutput<typeof textShortSchema>;
export const textShortSchema = v.pipe(
  v.string(),
  v.minLength(1, minLengthStringMessage),
  v.maxLength(10, maxLengthStringMessage),
);

export const zodiacSigns = [
  "Aries", // おひつじ座
  "Taurus", // おうし座
  "Gemini", // ふたご座
  "Cancer", // かに座
  "Leo", // しし座
  "Virgo", // おとめ座
  "Libra", // てんびん座
  "Scorpio", // さそり座
  "Sagittarius", // いて座
  "Capricorn", // やぎ座
  "Aquarius", // みずがめ座
  "Pisces", // うお座
] as const;

export type ZodiacSignSchema = v.InferOutput<typeof zodiacSignSchema>;
export const zodiacSignSchema = v.picklist(zodiacSigns, nonZodiacSigns);
