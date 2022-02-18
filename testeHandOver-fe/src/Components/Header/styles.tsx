import styled from "styled-components";

export const Container = styled.div`
  height: 3.4rem;
  background-color: #7be489;
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  > svg {
    cursor: pointer;
    color: #f7a80c;
    align-self: center;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  align-items: center;
  color: #000;
  > svg {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-style: bold;
  font-weight: 900;
  font-size: 22px;
  align-self: center;
  color: #0f0e0e;
  margin-left: 2.25rem;
`;

export const SearchBarDiv = styled.div`
  margin-left: 20%;
  margin-top: 12px;
`;
