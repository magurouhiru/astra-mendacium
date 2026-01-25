import { valibotResolver } from "@hookform/resolvers/valibot";
import { Trans } from "@lingui/react/macro";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { PATHS } from "@/router";
import { sampleSchema } from "@/types/sample";
import { toZodiacSignLabel } from "@/utils/trance";

function SampleQuestion() {
  const params = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      zodiacSign: "",
    },
    resolver: valibotResolver(sampleSchema, undefined, { mode: "sync" }),
  });

  return (
    <div>
      <h3>Sample Question {params.id}</h3>
      <p>
        <Trans>これはサンプルの占いの質問です。</Trans>
      </p>
      <p>
        <Trans>あなたの星座を選んでください。</Trans>
      </p>

      <form
        onSubmit={handleSubmit(() =>
          navigate(PATHS.sampleAnswer.pathWithParam("1")),
        )}
      >
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
          <Trans>結果を見る</Trans>
        </button>
      </form>
    </div>
  );
}

export default SampleQuestion;
