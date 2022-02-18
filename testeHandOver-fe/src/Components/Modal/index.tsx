import React, { InputHTMLAttributes } from "react";
import { useSpring, animated } from "react-spring";
import InsertForm from "../InsertForm";
import {
  BackGroundDiv,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  showModal?: boolean;
  setShowModal?: any;
  title?: string;
  buttontitle?: string;
  product?: any;
  modaltitle?: string;
  onClick?: (e: any) => void;
  onChangeName?: (e: any) => void;
  onChangePrice?: (e: any) => void;
  onChangeStockQuantity?: (e: any) => void;
}

const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  buttontitle,
  onClick,
  onChangeName,
  onChangePrice,
  onChangeStockQuantity,
  modaltitle,
}: Props) => {
  const animation: any = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {showModal ? (
        <BackGroundDiv>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                {modaltitle}
                <InsertForm
                  buttontitle={buttontitle}
                  onClick={onClick}
                  onChangeName={onChangeName}
                  onChangePrice={onChangePrice}
                />
              </ModalContent>
              <CloseModalButton
                aria-label="Close Modal"
                onClick={() => {
                  setShowModal((prev: any) => !prev);
                }}
              />
            </ModalWrapper>
          </animated.div>
        </BackGroundDiv>
      ) : null}
    </>
  );
};

export default Modal;
