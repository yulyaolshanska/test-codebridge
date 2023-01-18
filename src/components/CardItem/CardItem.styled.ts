import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '29px',
  marginBottom: '15px',
  color: '#363636',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '20px',
  },
}));

export const ReadMoreButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  color: '#363636',
  lineHeight: 1.5,
  fontWeight: 700,

  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
  // color: theme.palette.text.secondary,
  [theme.breakpoints.up('tablet')]: {
    width: '400px',
    // height: '530px',
  },
}));
