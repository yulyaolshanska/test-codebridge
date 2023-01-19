import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '100px 20px 100px',
  height: '100vh',
  [theme.breakpoints.up('mobile')]: {
    padding: '100px 20px 100px 20px',
  },
  [theme.breakpoints.up('tablet')]: {
    padding: '160px 32px 100px 32px',
  },
  [theme.breakpoints.up('desktop')]: {
    padding: '127px 16px 200px 16px',
  },
}));

export const Text = styled('h2')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 15px',
});

export const ErrorBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const HomeLink = styled(NavLink)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '26px',
  display: 'block',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '40px',
  },
}));

export const HomeLinkBox = styled('div')({
  padding: '10px',
  backgroundColor: '#f59256',
});

export const Error = styled('span')(({ theme }) => ({
  color: '#f59256',
  fontSize: '32px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '48px',
  },
}));
