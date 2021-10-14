import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from './SearchBar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default + ' !important',
    borderBottom: `1px solid ${theme.palette.divider}`,

    // Search bar width
    [theme.breakpoints.up('md')]: {
      '& form': {
        maxWidth: '75%',
      },
    },
  },
  toolbar: {
    gap: '1em',
  },
  logoText: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoIcon: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.dark,
    fontFamily: 'serif',
    padding: '0.25em',
    lineHeight: 1,
    borderRadius: '3px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const Header = () => {
  const location = useLocation()
  const path = location.pathname

  const classes = useStyles()

  return (
    <AppBar elevation={0} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h6">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Box className={classes.logoText}>
              <strong style={{ fontWeight: 500 }}>Best</strong>Search
            </Box>
            <Box className={classes.logoIcon}>ST</Box>
          </Link>
        </Typography>

        {path.startsWith('/search') && <SearchBar />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
