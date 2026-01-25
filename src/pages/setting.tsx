import { valibotResolver } from "@hookform/resolvers/valibot";
import { Trans } from "@lingui/react/macro";
import { useForm } from "react-hook-form";
import { getSetting, setSetting } from "@/services/setting-service";
import { type SettingSchema, settingSchema } from "@/types/setting";
import { toZodiacSignLabel } from "@/utils/trance";

function Setting() {
  const setting = getSetting();

  const submit = (data: SettingSchema) => {
    console.log("submit", data);
    setSetting(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: setting,
    resolver: valibotResolver(settingSchema, undefined, { mode: "sync" }),
  });

  return (
    <div>
      <h2>
        <Trans>設定</Trans>
      </h2>

      <form onSubmit={handleSubmit(submit)}>
        <select {...register("zodiacSign")}>
          <option value="">{toZodiacSignLabel(null)}</option>
          <option value="Aries">{toZodiacSignLabel("Aries")}</option>
          <option value="Taurus">{toZodiacSignLabel("Taurus")}</option>
          <option value="Gemini">{toZodiacSignLabel("Gemini")}</option>
          <option value="Cancer">{toZodiacSignLabel("Cancer")}</option>
          <option value="Leo">{toZodiacSignLabel("Leo")}</option>
          <option value="Virgo">{toZodiacSignLabel("Virgo")}</option>
          <option value="Libra">{toZodiacSignLabel("Libra")}</option>
          <option value="Scorpio">{toZodiacSignLabel("Scorpio")}</option>
          <option value="Sagittarius">
            {toZodiacSignLabel("Sagittarius")}
          </option>
          <option value="Capricorn">{toZodiacSignLabel("Capricorn")}</option>
          <option value="Aquarius">{toZodiacSignLabel("Aquarius")}</option>
          <option value="Pisces">{toZodiacSignLabel("Pisces")}</option>
        </select>
        {errors.zodiacSign && <p>{errors.zodiacSign.message}</p>}
        <button type="submit">
          <Trans>保存</Trans>
        </button>
      </form>
    </div>
  );
}

export default Setting;
