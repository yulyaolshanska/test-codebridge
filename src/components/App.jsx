import { ThemeProvider } from '@mui/material/styles';
// import { GlobalStyles } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { theme } from 'styles/theme';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'));
const Home = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>...</div>}>
        {/* <GlobalStyles /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="*" element={<div>Nooooo</div>} />
          {/* </Route> */}
        </Routes>
        <CssBaseline />
      </Suspense>
    </ThemeProvider>
  );
};
