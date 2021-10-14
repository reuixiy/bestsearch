import { Typography, Grid } from '@mui/material'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateKeyword, fetchTrends, searchTrends } from '../actions'
import Skeleton from '../components/Skeleton'
import Trends from '../components/Trends'
import Message from '../components/Message'
import * as Utils from '../utils'

const Search = ({
  isLoading,
  productTrends,
  updateKeyword,
  searchTrends,
  fetchTrends,
  message,
}) => {
  const { keyword } = useParams()
  const history = useHistory()

  const keywordS = Utils.sanitizeKeyword(keyword)

  // Update URL if keyword from address bar is formatted
  if (keyword !== keywordS) {
    history.push(`/search/${keywordS}`)
  }

  // Start search
  useEffect(() => {
    if (keywordS !== undefined) {
      updateKeyword(keywordS)
    }

    searchTrends(keywordS)
    fetchTrends(keywordS)
  }, [keywordS, updateKeyword, searchTrends, fetchTrends])

  return (
    <>
      {message ? (
        <Message message={message} />
      ) : (
        <>
          <Typography
            component="h2"
            variant="h6"
            sx={{
              fontWeight: 300,
              mb: '1rem',
            }}
          >
            Related product trends
          </Typography>

          <Grid container spacing={2}>
            {isLoading ? (
              <Skeleton />
            ) : (
              <Trends keywordS={keywordS} productTrends={productTrends} />
            )}
          </Grid>
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.searchReducer.isLoading,
  productTrends: state.searchReducer.productTrends,
  message: state.searchReducer.message,
})

const mapDispatchToProps = (dispatch) => ({
  updateKeyword: (keyword) => dispatch(updateKeyword(keyword)),
  searchTrends: (keyword) => dispatch(searchTrends(keyword)),
  fetchTrends: (keyword) => dispatch(fetchTrends(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
