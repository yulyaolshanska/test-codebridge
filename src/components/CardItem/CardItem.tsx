import Highlighter from 'react-highlight-words';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReadMoreButton, StyledGrid, Title } from './CardItem.styled';
import { formatDate } from 'helpers/formDate';
import { NavLink, useLocation } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

const CardItem: React.FC<ArticleCardProps> = ({
  title,
  summary,
  imageUrl,
  publishedAt,
  id,
}) => {
  const location = useLocation();
  const description =
    summary.length > 100 ? summary.substring(0, 100) + '...' : summary;
  const titleSbstr =
    title.length > 60 ? title.substring(0, 60) + '...' : title + '.';
  return (
    <StyledGrid
      item
      // component="li"
      mobile={12}
      tablet={4}
      // sx={{ marginBottom: '45px', marginRight: '45px' }}
    >
      <Card sx={{ height: 530 }} component="div">
        <CardMedia sx={{ height: 217 }} image={imageUrl} title="title" />
        <CardContent>
          <Typography>
            <CalendarTodayIcon />
            {formatDate(new Date(publishedAt))}
          </Typography>
          <Title variant="subtitle1">
            <Highlighter
              searchWords={['and', 'like']}
              autoEscape={true}
              textToHighlight={titleSbstr}
            ></Highlighter>
          </Title>
          <Typography color="text.secondary">
            <Highlighter
              searchWords={['and', 'like']}
              autoEscape={true}
              textToHighlight={description}
            ></Highlighter>
          </Typography>
        </CardContent>
        <CardActions>
          <ReadMoreButton size="small" endIcon={<ArrowForwardIcon />}>
            <NavLink to={`/article/${id}`} state={{ from: location }}>
              Read More
            </NavLink>
          </ReadMoreButton>
        </CardActions>
      </Card>
    </StyledGrid>
  );
};

export default CardItem;
