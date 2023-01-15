const { Grid } = require('@mui/material');
const { Box } = require('@mui/system');
const { default: CardItem } = require('components/CardItem/CardItem');

const CardList = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ mobile: '30px', tablet: '45px' }}
        columns={{ mobile: 4, tablet: 6, desktop: 12 }}
        component="ul"
        justifyContent="center"
      >
        {Array.from(Array(6)).map((_, index) => (
          <CardItem key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
