import { Container } from '@mui/material';
import CardList from 'components/CardList/CardList';
import FilterField from 'components/FilterField/FilterField';

const Home: React.FC = () => {
  return (
    <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <FilterField />
      <CardList />
    </Container>
  );
};

export default Home;
