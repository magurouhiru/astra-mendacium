import { valibotResolver } from "@hookform/resolvers/valibot";
import { Trans } from "@lingui/react/macro";
import { useForm } from "react-hook-form";
import { settingSchema } from "@/types/setting";

function Setting() {
  function log() {
    console.log(errors);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: valibotResolver(settingSchema),
  });

  return (
    <div>
      <h2>
        <Trans>設定</Trans>
      </h2>
      <div>
        <button type="button" onClick={log}>
          <Trans>保存</Trans>
        </button>
      </div>

      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input {...register("text")} />
        {errors.text && <p>{errors.text.message}</p>}
      </form>
    </div>
  );
}

export default Setting;
