import { settingSchema, type SettingSchema } from "@/types/setting";
import * as v from "valibot";

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

export function saveSetting(setting: SettingSchema) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(setting));
}
