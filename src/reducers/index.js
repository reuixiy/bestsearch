import { combineReducers } from 'redux'
import * as actions from '../actions/types'

const initialState = {
  isLoading: false,
  keyword: '',
  productTrends: [],
  message: '',
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.KEYWORD_INPUTTED:
      return {
        ...state,
        keyword: action.payload.keyword,
      }
    case actions.TRENDS_SEARCH_STARTED:
      return {
        ...state,
        isLoading: true,
        productTrends: [],
        message: '',
      }
    case actions.TRENDS_SEARCH_FETCHED:
      return {
        ...state,
        isLoading: false,
        productTrends: action.payload.data,
      }
    case actions.TRENDS_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        productTrends: [],
        message: action.payload.message,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  searchReducer,
})

export { reducers }
