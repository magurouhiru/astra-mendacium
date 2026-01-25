import * as v from "valibot";
import { type SettingSchema, settingSchema } from "@/types/setting";

const LOCAL_STORAGE_KEY = "setting";

const DEFAULT_SETTING: SettingSchema = {
  zodiacSign: null,
} as const;

export function getSetting(): SettingSchema {
  const settingJson = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (settingJson) {
    const result = v.safeParse(settingSchema, JSON.parse(settingJson));
    if (result.success) {
      return result.output;
    }
  }
  return DEFAULT_SETTING;
}

export function setSetting(setting: SettingSchema) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(setting));
}
