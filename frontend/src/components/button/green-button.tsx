import { Button } from "antd";
import "./green-button.scss";

const GreenButton = (props: any) => {
  const { handleButton, content } = props;
  return (
    <Button className="green-button" onClick={handleButton}>
      {content}
    </Button>
  );
};

export default GreenButton;
