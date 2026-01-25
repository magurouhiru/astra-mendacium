import { t } from "@lingui/core/macro";
import type { ZodiacSignSchema } from "@/types/common";

export function toZodiacSignLabel(sign: ZodiacSignSchema | "" | null): string {
  switch (sign) {
    case "Aries":
      return t`おひつじ座`;
    case "Taurus":
      return t`おうし座`;
    case "Gemini":
      return t`ふたご座`;
    case "Cancer":
      return t`かに座`;
    case "Leo":
      return t`しし座`;
    case "Virgo":
      return t`おとめ座`;
    case "Libra":
      return t`てんびん座`;
    case "Scorpio":
      return t`さそり座`;
    case "Sagittarius":
      return t`いて座`;
    case "Capricorn":
      return t`やぎ座`;
    case "Aquarius":
      return t`みずがめ座`;
    case "Pisces":
      return t`うお座`;
    default:
      return t`未選択`;
  }
}
