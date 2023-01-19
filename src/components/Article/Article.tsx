import { Box, Container } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useGetArticleByIdQuery } from 'redux/articlesApi';
import {
  BackButton,
  StyledBox,
  StyledNavLink,
  StyledTypography,
  Title,
} from './Article.styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loader from 'components/Loader/Loader';

const Article: React.FC = () => {
  const { id = '' } = useParams();
  const location = useLocation();

  const { data: article, isLoading } = useGetArticleByIdQuery(id);
  const summary = article?.summary || '';
  return (
    <>
      <Container sx={{ padding: '150px 75px 50px 75px' }}>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            width: '100%',
            height: '245px',
            left: 0,
            top: 0,
            background: `no-repeat url(${
              !isLoading && article?.imageUrl ? article?.imageUrl : ''
            }), #C4C4C4`,
            backgroundSize: 'cover',
          }}
        />

        <StyledBox sx={{ paddingX: '75px', paddingY: '50px' }}>
          <Title>{article?.title}</Title>
          {!isLoading && summary.length < 400 ? (
            <>
              <StyledTypography>
                The 2020 Worlds Most Valuable Brands Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Interdum ornare convallis non etiam
                tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse
                volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris
                enim, turpis blandit. Porttitor facilisi viverra mi lacus
                lacinia accumsan. Pellentesque gravida ligula bibendum aliquet
                nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
                facilisis amet placerat ultrices lobortis proin nulla. Molestie
                tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi
                amet vitae ultrices nullam tellus. Pellentesque eget iaculis
                morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat
                vel convallis nulla orci, nunc etiam.
              </StyledTypography>
              <StyledTypography>
                Elementum risus facilisi mauris diam amet et sed. At aliquet id
                amet, viverra a magna lorem urna. Nibh scelerisque quam quam
                massa amet, sollicitudin vel non. Gravida laoreet neque
                tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet
                tortor, velit. Dictum pellentesque dolor sit duis sed nibh.
                Euismod rutrum pellentesque semper mattis aliquet ornare.
              </StyledTypography>
              <StyledTypography>
                The 2020 Worlds Most Valuable Brands Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Interdum ornare convallis non etiam
                tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse
                volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris
                enim, turpis blandit. Porttitor facilisi viverra mi lacus
                lacinia accumsan. Pellentesque gravida ligula bibendum aliquet
                nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
                facilisis amet placerat ultrices lobortis proin nulla. Molestie
                tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi
                amet vitae ultrices nullam tellus. Pellentesque eget iaculis
                morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat
                vel convallis nulla orci, nunc etiam.
              </StyledTypography>
              <StyledTypography>
                Elementum risus facilisi mauris diam amet et sed. At aliquet id
                amet, viverra a magna lorem urna. Nibh scelerisque quam quam
                massa amet, sollicitudin vel non. Gravida laoreet neque
                tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet
                tortor, velit. Dictum pellentesque dolor sit duis sed nibh.
                Euismod rutrum pellentesque semper mattis aliquet ornare.
              </StyledTypography>
            </>
          ) : (
            <StyledTypography>{summary}</StyledTypography>
          )}
          {isLoading && <Loader />}
        </StyledBox>

        <BackButton
          sx={{ marginTop: '35px', padding: '10px' }}
          size="small"
          startIcon={<ArrowBackIcon />}
        >
          <StyledNavLink to={location.state?.from}>
            Back to homepage
          </StyledNavLink>
        </BackButton>
      </Container>
    </>
  );
};

export default Article;
