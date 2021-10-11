import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

export const Search = () => {
  const history = useHistory()

  return (
    <>
      <p>/search</p>
      <Button onClick={() => history.push('/')}>Go to /</Button>
    </>
  )
}
