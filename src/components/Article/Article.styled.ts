import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { ReadMoreButton } from 'components/CardItem/CardItem.styled';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '90px 15px 25px 15px',
  [theme.breakpoints.up('tablet')]: {
    padding: '150px 75px 50px 75px',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  zIndex: 20,
  background: '#FFFFFF',
  border: '1px solid #EAEAEA',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  padding: '30px 20px',
  borderRadius: '5px',
  [theme.breakpoints.up('tablet')]: {
    padding: '50px 75px',
  },
}));

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
  fontSize: '16px',
  lineHeight: 1.5,
  color: '#000000',
  marginBottom: '15px',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '40px',
    fontSize: '18px',
  },
}));
