import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginBottom: '30px',
  width: '100%',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '40px',
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // background: '#FFFFFF',

  border: '1px solid #EAEAEA',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  borderRadius: '5px',
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
  },

  [theme.breakpoints.up('tablet')]: {
    width: '75ch',
  },
  '& .MuiInputBase-input': {
    display: 'block',
    color: '#575757',
    padding: theme.spacing(1.7, 2, 1.7, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //   transition: theme.transitions.create('width'),
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '10px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#363636',
}));
