import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReadMoreButton } from 'components/CardItem/CardItem.styled';
import { NavLink } from 'react-router-dom';

export const StyledBox = styled(Box)({
  zIndex: 20,
  background: '#FFFFFF',
  border: '1px solid #EAEAEA',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  padding: '50px 75px',
  borderRadius: '5px',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '29px',
  color: '#363636',
  marginBottom: '20px',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '50px',
  },
}));

export const BackButton = styled(ReadMoreButton)({});

export const StyledNavLink = styled(NavLink)({
  display: 'block',
  width: '100%',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: 1.5,
  color: '#000000',

  marginBottom: '15px',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '40px',
  },
}));
