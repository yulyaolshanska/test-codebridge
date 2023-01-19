import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginBottom: '30px',
  width: '100%',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '40px',
  },
}));

export const SearchIconBtn = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  zIndex: 5,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: '1px solid #EAEAEA',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  borderRadius: '5px',
  '&:hover': {
    boxShadow: '0 0 0 0.1rem rgba(0,90,90,.2)',
  },
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '500px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '600px',
  },

  '& .MuiInputBase-input': {
    display: 'block',
    cursor: 'pointer',
    color: '#575757',
    padding: theme.spacing(1.7, 2, 1.7, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '10px',
  fontWeight: 600,
  lineHeight: '1.25',
}));
