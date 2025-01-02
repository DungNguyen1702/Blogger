import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface GreenTagProps {
  emphasizeWord: string;
  normalWorld: string;
}

const GreenTag = (props: GreenTagProps) => {
  const { emphasizeWord, normalWorld } = props;

  return (
    <div className="d-flex align-items-center green-tag-container">
      <span className="green-tag-emphasize-world">{emphasizeWord}</span>
      <span>{normalWorld}</span>
    </div>
  );
};

export default GreenTag;
