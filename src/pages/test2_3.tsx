import { useParams } from "react-router";

function Test2_3() {
  const params = useParams();
  return (
    <div className="">
      Test2_3
      <div>Params: {JSON.stringify(params)}</div>
    </div>
  );
}

export default Test2_3;
