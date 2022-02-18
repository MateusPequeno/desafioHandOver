import styled from "styled-components";

export const SearchDiv = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  > button {
    margin-left: -35px;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const SearchIcon = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  max-width: 35.375rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 4px;
`;
