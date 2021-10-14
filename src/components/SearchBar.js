import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Box, OutlinedInput, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { connect } from 'react-redux'
import { updateKeyword } from '../actions'
import * as Utils from '../utils'

const SearchBar = ({ keyword, updateKeyword }) => {
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname

  const handleChange = (e) => {
    const { value } = e.target

    updateKeyword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const keywordInput = Utils.sanitizeKeyword(formData.get('keyword'))

    // In homepage, do nothing if keyword is empty
    if (path === '/' && !keywordInput) return

    history.push(`/search/${keywordInput}`)
  }

  // Clear keyword on route change to homepage
  useEffect(() => {
    if (path === '/') {
      updateKeyword('')
    }
  }, [path, updateKeyword])

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: '0.5em',
        flexGrow: '1',
      }}
    >
      <OutlinedInput
        name="keyword"
        value={keyword}
        onChange={handleChange}
        placeholder="Search for new products in 961K stores"
        sx={{
          flexGrow: 1,
          '& .MuiOutlinedInput-input': { padding: '0.5em 1em' },
        }}
      />
      <Button
        type="submit"
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

const mapStateToProps = (state) => ({
  keyword: state.searchReducer.keyword,
})

const mapDispatchToProps = (dispatch) => ({
  updateKeyword: (keyword) => dispatch(updateKeyword(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
