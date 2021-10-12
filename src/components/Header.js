import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        position: 'fixed',
        backgroundColor: 'background.default',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          sx={{ fontWeight: 300 }}
        >
          <strong style={{ fontWeight: 500 }}>Best</strong>Search
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
