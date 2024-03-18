import React from 'react';
import { SearchBarStyled, SearchBarContainer, SearchBtn } from './search-bar.styled';
import Image from "next/image";

type InputProps = {
  setLocation:  React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({setLocation}:InputProps) => {
  let searchValue = '';

  const handleClick = () => {
    setLocation(searchValue);
  }

  const handleChange = (event: { target: { value: any; }; }) => {
    searchValue = event.target.value;
  }

  return (
    <SearchBarContainer>
      <SearchBarStyled name="searchTxt" type="text" id="searchTxt" className="searchField" onChange={handleChange}/>
      <SearchBtn onClick={handleClick}>
        <Image alt="Arrow Icon" width="18" height="15" src="/arrow.png" />
      </SearchBtn>
    </SearchBarContainer>
  );
}
export default SearchBar;
