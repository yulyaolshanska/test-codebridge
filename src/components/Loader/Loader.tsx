import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#5693f5"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </Spinner>
  );
};

export default Loader;