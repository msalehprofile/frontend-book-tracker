import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  label: String;
  handleGetBooksInfo: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default Button;
