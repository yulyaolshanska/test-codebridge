import { ThemeProvider } from '@mui/material/styles';
import { createTheme, CssBaseline } from '@mui/material';
import { themeOptions } from '../styles/theme';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';

const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'));
const Home = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CssBaseline />
      </Suspense>
    </ThemeProvider>
  );
};
