/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from "react";
import { Search } from "@material-ui/icons";
import { SearchInput, SearchDiv } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: (e: any) => void;
}

const SearchBar: React.FC<Props> = ({ onClick, ...rest }: Props) => {
  return (
    <SearchDiv>
      <SearchInput {...rest} />
      <button type="button" onClick={onClick}>
        <Search />
      </button>
    </SearchDiv>
  );
};

export default SearchBar;
