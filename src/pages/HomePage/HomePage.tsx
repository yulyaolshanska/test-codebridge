import CardList from 'components/CardList/CardList';
import FilterField from 'components/FilterField/FilterField';
import { Box } from './Home.styled';

const Home: React.FC = () => {
  return (
    <Box>
      <FilterField />
      <CardList />
    </Box>
  );
};

export default Home;
