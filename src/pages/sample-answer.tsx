import { Link } from "react-router";
import { PATHS } from "@/router";
import { getSetting } from "@/services/setting-service";
import { toZodiacSignLabel } from "@/utils/trance";

function SampleAnswer() {
  const setting = getSetting();

  return (
    <div>
      <h2>Sample Answer</h2>
      <p>これはサンプルの占いの結果です。</p>
      <p>あなたと相性が良い星座は: {toZodiacSignLabel(setting.zodiacSign)}</p>
      <Link to={PATHS.sampleEnd.path}>次へ</Link>
    </div>
  );
}

export default SampleAnswer;
