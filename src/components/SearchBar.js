import { Box, OutlinedInput, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

export const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', gap: '0.5em' }}>
      <OutlinedInput
        placeholder="Search for new products in 961K stores"
        sx={{
          flexGrow: 1,
          '& .MuiOutlinedInput-input': { padding: '0.5em 1em' },
        }}
      />
      <Button
        variant="outlined"
        sx={{
          color: 'rgba(0, 0, 0, 0.54)',
          borderColor: 'rgba(0, 0, 0, 0.23)',
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  )
}
