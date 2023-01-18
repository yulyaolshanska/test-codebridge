import { ThemeProvider } from '@mui/material/styles';
// import { GlobalStyles } from '@mui/material';
import { createTheme, CssBaseline } from '@mui/material';
import { themeOptions } from '../styles/theme';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'));
const Home = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Suspense fallback={<div>...</div>}>
        {/* <GlobalStyles /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<div>Nooooo</div>} />
        </Routes>
        <CssBaseline />
      </Suspense>
    </ThemeProvider>
  );
};
