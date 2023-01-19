import { styled } from '@mui/system';

export const NotFound = styled('p')(({ theme }) => ({
  fontSize: '20px',
  color: 'red',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '30px',
  },
}));

export const NotFoundBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
