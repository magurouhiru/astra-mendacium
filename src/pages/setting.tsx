import { valibotResolver } from "@hookform/resolvers/valibot";
import { Trans } from "@lingui/react/macro";
import { useFieldArray, useForm } from "react-hook-form";
import { safeParse } from "valibot";
import { settingSchema } from "@/types/setting";

function Setting() {
  function log() {
    console.log(getValues());
    console.log(errors);
    console.log(safeParse(settingSchema, getValues()));
  }

  const {
    register,
    handleSubmit,
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      text: "",
      array: [
        {
          aa: "",
        },
      ],
    },
    resolver: valibotResolver(settingSchema, undefined, { mode: "sync" }),
  });

  const { append, remove, fields } = useFieldArray({
    name: "array",
    control,
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
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`array.${index}.aa`, {
                  onChange: () => trigger("array"),
                })}
              />
              {errors.array?.[index]?.aa && (
                <p>{errors.array?.[index].aa.message}</p>
              )}
              <button
                type="button"
                onClick={() => {
                  remove(index);
                  trigger("array");
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
        {errors.array && <p>{errors.array.message}</p>}
        <button type="button" onClick={() => append({ aa: "" })}>
          append
        </button>
      </form>
    </div>
  );
}

export default Setting;
