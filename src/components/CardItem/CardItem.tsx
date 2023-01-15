import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Articles } from 'types';
import { ReadMoreButton, StyledGrid } from './CardItem.styled';

const CardItem: React.FC<Props> = () => {
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
