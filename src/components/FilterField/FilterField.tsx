import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Title,
} from './FilterField.styled';

const FilterField: React.FC = () => {
  return (
    <>
      <Title>Filter by keywords</Title>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>
  );
};
export default FilterField;
