import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
       body {
  margin: 0;
//   background-color: ${p => p.theme.colors.background};
//   font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   line-height: ${p => p.theme.lineHeights.body};
},
ul,
ol {
   list-style: none;
  padding: 0;
  margin: 0;
},
body,
h1,
h2,
h3,
h4,
p,
li {
  margin: 0;
  padding: 0;
},
input,
button,
textarea,
select {
  font: inherit;
},
img {
  display: block;
  max-width: 100%;
  height: auto;
},
a {
  text-decoration: none;
  font-style: normal;
  color: inherit;
  display: block;
}
      `,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 24,
    },
    description: {
      fontSize: 16,
    },
  },
});
