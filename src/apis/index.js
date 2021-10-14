import axios from 'axios'
import { BESTSEARCH_BACKEND } from '../constants'
import { mockData } from './mock-data'

axios.defaults.baseURL = BESTSEARCH_BACKEND

// Real api
const searchReal = async (keyword) =>
  await axios.post('/keyword_search', {
    login_token: 'INTERVIEW_SIMPLY2021',
    search_phrase: keyword,
  })

// Mock api
const searchMock = async (keyword) =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (keyword) {
        resolve(mockData)
      } else {
        reject('Empty keyword!')
      }
    }, 4200)
  })

const APIs = {
  search: process.env.REACT_APP_ENV === 'mock' ? searchMock : searchReal,
}

export { APIs }
