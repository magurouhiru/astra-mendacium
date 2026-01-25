import { Trans } from "@lingui/react/macro";
import { Link } from "react-router";
import { PATHS } from "@/router";

function SampleHome() {
  return (
    <div>
      <h2>
        <Trans>サンプルの占い</Trans>
      </h2>
      <p>
        <Trans>これはサンプルの占いページです。</Trans>
      </p>
      <Link to={PATHS.sampleQuestion.pathWithParam("1")}>
        <Trans>占いを始める</Trans>
      </Link>
    </div>
  );
}

export default SampleHome;
