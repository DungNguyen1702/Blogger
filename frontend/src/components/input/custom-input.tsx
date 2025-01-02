import { Input } from "antd";
import "./custom-input.scss";
import ColorSystem from "../../constants/colors";

const CustomInput = (props: any) => {
  const {
    handleButton,
    value,
    handleOnChange,
    placeholderText = "",
    borderColor = ColorSystem.listPostFreshGreen,
    backgroundColor = ColorSystem.white,
    contentColor = ColorSystem.black,
    type = "text",
    cssCustom = "",
    id = ""
  } = props;
  return (
    <Input
      id={id}
      className={`custom-input ${cssCustom}`}
      onClick={handleButton}
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: contentColor
      }}
      placeholder={placeholderText}
      value={value}
      onChange={handleOnChange}
      type={type}
    />
  );
};

export default CustomInput;
