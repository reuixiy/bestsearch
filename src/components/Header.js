import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
import SearchBar from './SearchBar'

const Header = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <AppBar
      elevation={0}
      sx={{
        position: 'fixed',
        backgroundColor: 'background.default',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,

        // Search bar width
        '& form': {
          maxWidth: '75%',
        },
      }}
    >
      <Toolbar sx={{ gap: '1em' }}>
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          sx={{ fontWeight: 300 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <strong style={{ fontWeight: 500 }}>Best</strong>Search
          </Link>
        </Typography>

        {path.startsWith('/search') && <SearchBar />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
