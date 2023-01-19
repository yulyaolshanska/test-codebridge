import React from 'react';
import { useGetArticlesQuery } from 'redux/articlesApi';
import { useAppSelector } from 'redux/store';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardItem from 'components/CardItem/CardItem';
import Loader from 'components/Loader/Loader';
import { NotFound, NotFoundBox } from './CardList.styled';
import { Article } from 'types';

const CardList: React.FC = () => {
  const filter = useAppSelector(state => state.search.searchQuery);
  const { data: articles = [], isLoading } = useGetArticlesQuery(filter);

  const filtredList = articles
    .filter(
      article =>
        article.title.toLowerCase().includes(filter.toLowerCase()) ||
        article.summary.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a: Article, b: Article) => {
      if (
        a.title.toLowerCase().includes(filter.toLowerCase()) &&
        b.summary.toLowerCase().includes(filter.toLowerCase())
      ) {
        return -1;
      }
      return 1;
    });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isLoading && articles?.length === 0 && (
        <NotFoundBox>
          <NotFound>Nothing found. Please, try again.</NotFound>
        </NotFoundBox>
      )}
      {filter && articles?.length !== 0 && (
        <Typography
          sx={{
            fontWeight: 600,
            borderBottom: '1px solid #EAEAEA',
            lineHeight: '1.25',
            marginBottom: '45px',
          }}
        >
          Results: {articles.length}
        </Typography>
      )}

      <Grid
        container
        spacing={{ mobile: '30px', tablet: '45px' }}
        columns={{ mobile: 4, tablet: 6, desktop: 12 }}
        component="ul"
        justifyContent="center"
      >
        {!isLoading ? (
          filtredList.map(({ id, title, summary, imageUrl, publishedAt }) => (
            <CardItem
              key={id}
              title={title}
              summary={summary}
              imageUrl={imageUrl}
              publishedAt={publishedAt}
              id={id}
            />
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </Box>
  );
};

export default CardList;
