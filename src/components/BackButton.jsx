import { useNavigate } from "react-router-dom";
import Buttton from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Buttton
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Buttton>
  );
}

export default BackButton;
