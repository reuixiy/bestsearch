import { Typography } from '@mui/material'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 300,
          mt: '8rem',
          mb: '4rem',
        }}
      >
        Search Trends
      </Typography>

      <SearchBar />
    </>
  )
}

export default Home
