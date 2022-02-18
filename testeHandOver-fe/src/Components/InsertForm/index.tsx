import React, { InputHTMLAttributes } from "react";
import Button from "../Button";
import { InputDiv, InputStyle } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: (e: any) => void;
  onChangeName?: (e: any) => void;
  onChangePrice?: (e: any) => void;
  onChangeStockQuantity?: (e: any) => void;
  buttontitle?: string;
}

const InputForm: React.FC<Props> = ({
  onClick,
  onChangeName,
  onChangePrice,
  onChangeStockQuantity,
  buttontitle,
  ...rest
}: Props) => {
  return (
    <>
      <InputDiv>
        <InputStyle
          {...rest}
          placeholder="Nome do Produto"
          onChange={onChangeName}
        />
        <InputStyle {...rest} placeholder="Preço" onChange={onChangePrice} />
        <InputStyle
          {...rest}
          placeholder="Quantidade em estoque"
          onChange={onChangeStockQuantity}
        />
      </InputDiv>
      <Button type="button" onClick={onClick}>
        {buttontitle}
      </Button>
    </>
  );
};

export default InputForm;
