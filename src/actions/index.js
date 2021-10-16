import * as actions from './types'
import { APIs } from '../apis'

export const updateKeyword = (o) => (dispatch) => {
  const actionMap = {
    input: actions.KEYWORD_INPUTTED,
    clear: actions.KEYWORD_CLEARED,
    format: actions.KEYWORD_FORMATTED,
  }

  dispatch({
    type: actionMap[o.type],
    payload: {
      keyword: o.value,
    },
  })
}

export const searchTrends = (keyword) => (dispatch) => {
  // console.log('searchTrends has been called.')

  if (keyword) {
    dispatch({
      type: actions.TRENDS_SEARCH_STARTED,
    })
  } else {
    // if keyword is empty
    dispatch({
      type: actions.TRENDS_SEARCH_FAILED,
      payload: {
        message: {
          type: 'info',
          content: 'No keyword was provided.',
        },
      },
    })
  }
}

export const fetchTrends = (keyword) => async (dispatch) => {
  APIs.search(keyword)
    .then((res) => {
      // console.log(res.product_trends)

      dispatch({
        type: actions.TRENDS_SEARCH_FETCHED,
        payload: {
          data: res.product_trends,
        },
      })
    })
    .catch((err) => {
      console.error(err)

      dispatch({
        type: actions.TRENDS_SEARCH_FAILED,
        payload: {
          message: {
            type: 'error',
            content: err.toString(),
          },
        },
      })
    })
}
