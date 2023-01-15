import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Articles } from 'types';

const CardItem: React.FC<Props> = () => {
  const ReadMoreButton = styled(Button)({
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

  const StyledGrid = styled(Grid)(({ theme }) => ({
    // color: theme.palette.text.secondary,
    // [theme.breakpoints.up('tablet')]: {
    //   width: '400px',
    // },
  }));
  return (
    <StyledGrid
      item
      // component="li"
      mobile={12}
      tablet={4}
      // sx={{ marginBottom: '45px', marginRight: '45px' }}
    >
      <Card component="div">
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="p">
            Lizard
          </Typography>
          <Typography color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <ReadMoreButton size="small" endIcon={<ArrowForwardIcon />}>
            Read More
          </ReadMoreButton>
        </CardActions>
      </Card>
    </StyledGrid>
  );
};

type Props = {
  newsData: Articles;
};

export default CardItem;
