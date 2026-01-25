import { valibotResolver } from "@hookform/resolvers/valibot";
import { useFieldArray, useForm } from "react-hook-form";
import { testSchema } from "@/types/test";

function Test1() {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      test1: "",
      test2: [
        {
          test2Item: "",
        },
      ],
    },
    resolver: valibotResolver(testSchema, undefined, { mode: "sync" }),
  });

  const { fields, append, remove } = useFieldArray({
    name: "test2",
    control,
  });

  return (
    <div>
      <h2>Test1</h2>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <button type="submit">Submit</button>
        <input {...register("test1")} />
        {errors.test1 && <p>{errors.test1.message}</p>}
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                {...register(`test2.${index}.test2Item`, {
                  onChange: () => trigger("test2"),
                })}
              />
              {errors.test2?.[index]?.test2Item && (
                <p>{errors.test2[index]?.test2Item?.message}</p>
              )}
              <button
                type="button"
                onClick={() => {
                  remove(index);
                  trigger("test2");
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
        {errors.test2 && <p>{errors.test2.message}</p>}
        <button type="button" onClick={() => append({ test2Item: "" })}>
          append
        </button>
      </form>
    </div>
  );
}

export default Test1;
