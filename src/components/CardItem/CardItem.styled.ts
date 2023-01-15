import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

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
  // [theme.breakpoints.up('tablet')]: {
  //   width: '400px',
  // },
}));
