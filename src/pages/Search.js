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

  // Start search on page loaded
  useEffect(() => {
    // Update loading status
    searchTrends(keyword)

    const keywordS = keyword && Utils.sanitizeKeyword(keyword)

    if (keywordS) {
      if (keywordS !== keyword) {
        // Redirect URL if keyword is not sanitized (from address bar)
        history.push(`/search/${keywordS}`)
      } else {
        // Start request if keyword is sanitized already
        fetchTrends(keyword)

        // Update formatted keyword to store, since we don't want
        // display sanitized keyword in input for user
        updateKeyword({
          type: 'format',
          value: keyword,
        })
      }
    }
  }, [keyword, history, updateKeyword, searchTrends, fetchTrends])

  return (
    <>
      {message || !keyword ? (
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
              <Trends keyword={keyword} productTrends={productTrends} />
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
