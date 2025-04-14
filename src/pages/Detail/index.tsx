import { useParams } from "react-router";

function Detail() {
  const { cripto } = useParams();

  return (
    <div>
      <h1>Detalhes da moeda {cripto}</h1>
    </div>
  );
}

export default Detail;
