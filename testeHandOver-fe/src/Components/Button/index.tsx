import React, { InputHTMLAttributes } from "react";
import { ButtonComponent } from "./styles";

type ButtonProps = InputHTMLAttributes<HTMLButtonElement>;

export type Props = ButtonProps;

const Button: React.FC<Props> = ({
  type,
  children,
  className,
  color,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ButtonComponent
        type={type ? "button" : "submit"}
        color={color}
        onClick={onClick}
      >
        {children}
      </ButtonComponent>
    </div>
  );
};

export default Button;
