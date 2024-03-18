import React from 'react';
import { SearchBarStyled, SearchBarContainer, SearchBtn } from './search-bar.styled';

type InputProps = {
  setLocation:  React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({setLocation}:InputProps) => {
  let searchValue = '';

  const handleClick = () => {
    setLocation(searchValue);
  }

  const handleChange = (event: { target: { value: any; }; } | undefined) => {
    searchValue = event.target.value;
  }

  return (
    <SearchBarContainer>
      <SearchBarStyled name="searchTxt" type="text" id="searchTxt" className="searchField" onChange={handleChange}/>
      <SearchBtn onClick={handleClick}>
        <img width="18" height="15" src="/arrow.png" />
      </SearchBtn>
    </SearchBarContainer>
  );
}
export default SearchBar;
