import { ThemeOptions } from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 650,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
       body {
  margin: 0;
  box-sizing: border-box;
   padding: 0;
   font-family: "Montserrat";
   color: #363636;
   font-size: 16px;
},
ul,
ol {
   list-style: none;
  padding: 0;
  margin: 0;
},

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
};

// export const theme = createTheme({
// breakpoints: {
//   values: {
//     xs: 0,
//     sm: 600,
//     md: 900,
//     lg: 1200,
//     xl: 1536,
//   },
// },
// });
