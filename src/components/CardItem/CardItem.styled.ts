import { styled } from '@mui/material/styles';
import { Button, Card, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const CalendarIcon = styled(CalendarTodayIcon)({
  marginRight: '10px',
});

export const CalendarDate = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontSize: '14px',
  color: 'rgba(54, 54, 54, 0.6)',
  marginBottom: '14px',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '20px',
  },
  [theme.breakpoints.up('desktop')]: {
    marginBottom: '24px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '1.2',
  marginBottom: '15px',
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

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '500px',
  [theme.breakpoints.up('desktop')]: {
    height: '560px',
  },
  [theme.breakpoints.up(1440)]: {
    width: '400px',
    height: '530px',
  },
}));
