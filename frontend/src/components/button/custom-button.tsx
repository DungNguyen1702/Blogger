import { Button } from "antd";
import "./custom-button.scss";
import ColorSystem from "../../constants/colors";

const CustomButton = (props: any) => {
  const {
    handleButton,
    content,
    borderColor = ColorSystem.listPostFreshGreen,
    backgroundColor = ColorSystem.white,
    contentColor = ColorSystem.listPostFreshGreen,
    cssClassCustom = ""
  } = props;
  return (
    <Button
      className={`custom-button ${cssClassCustom}`}
      onClick={handleButton}
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: contentColor
      }}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
