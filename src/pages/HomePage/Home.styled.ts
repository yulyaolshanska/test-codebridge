import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const Box = styled(Container)(({ theme }) => ({
  padding: '20px 20px 30px 20px',

  [theme.breakpoints.up('desktop')]: {
    padding: '50px 75px 50px 75px',
  },
}));
