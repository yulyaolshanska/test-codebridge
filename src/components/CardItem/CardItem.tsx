import React from 'react';
import Highlighter from 'react-highlight-words';
import { CardActions, CardContent, CardMedia, Grid } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  CalendarIcon,
  CalendarDate,
  ReadMoreButton,
  StyledCard,
  Title,
} from './CardItem.styled';
import { formatDate } from 'helpers/formDate';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from 'redux/store';

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
  const filter = useAppSelector(state => state.search.searchQuery);

  return (
    <Grid item component="li" mobile={12} tablet={4} sx={{ width: '400px' }}>
      <StyledCard>
        <CardMedia sx={{ height: 217 }} image={imageUrl} title="title" />
        <CardContent>
          <CalendarDate>
            <CalendarIcon />
            {formatDate(new Date(publishedAt))}
          </CalendarDate>
          <Title>
            <Highlighter
              searchWords={[filter]}
              autoEscape={true}
              textToHighlight={titleSbstr}
            ></Highlighter>
          </Title>
          <Highlighter
            searchWords={[filter]}
            autoEscape={true}
            textToHighlight={description}
          ></Highlighter>
        </CardContent>
        <CardActions>
          <ReadMoreButton size="small" endIcon={<ArrowForwardIcon />}>
            <NavLink to={`/article/${id}`} state={{ from: location }}>
              Read More
            </NavLink>
          </ReadMoreButton>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

export default CardItem;
