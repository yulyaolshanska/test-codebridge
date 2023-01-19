import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setSearchQuery } from 'redux/searchSlice';
import { useAppDispatch } from 'redux/store';
import {
  Search,
  SearchIconBtn,
  StyledInputBase,
  Title,
} from './FilterField.styled';

const FilterField: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('filter');
  const [inputValue, setInputValue] = useState(query || '');
  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    inputValue ? setSearchParams({ filter: inputValue }) : setSearchParams({});
    dispatch(setSearchQuery({ searchQuery: inputValue.trim() }));
  };

  return (
    <>
      <Title>Filter by keywords</Title>
      <Search>
        <Box component="form" onSubmit={handleSubmit}>
          <SearchIconBtn type="submit">
            <SearchIcon />
          </SearchIconBtn>

          <StyledInputBase
            onChange={e => {
              setInputValue(e.target.value);
              setSearchParams({ filter: inputValue });
            }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            // value={inputValue}
          />
        </Box>
      </Search>
    </>
  );
};
export default FilterField;
