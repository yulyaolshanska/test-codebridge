import { useGetArticlesQuery } from 'redux/articlesApi';

const { Grid } = require('@mui/material');
const { Box } = require('@mui/system');
const { default: CardItem } = require('components/CardItem/CardItem');

const CardList = () => {
  const { data: articles = [] } = useGetArticlesQuery('1');
  // console.log('articles', articles);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ mobile: '30px', tablet: '45px' }}
        columns={{ mobile: 4, tablet: 6, desktop: 12 }}
        component="ul"
        justifyContent="center"
      >
        {articles.map(({ id, title, summary, imageUrl, updatedAt }) => (
          <CardItem
            key={id}
            title={title}
            summary={summary}
            imageUrl={imageUrl}
            publishedAt={updatedAt}
            id={id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
