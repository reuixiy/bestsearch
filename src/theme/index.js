import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: '#f9f4e8',
    },
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000',
      contrastText: '#fff',
    },
    text: {
      caption: 'rgba(0, 0, 0, 0.5)',
    },
  },
})

export { theme }
