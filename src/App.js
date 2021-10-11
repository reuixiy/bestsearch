import './App.css'
import { Switch, Route, Redirect, Link, useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

function App() {
  const history = useHistory()

  return (
    <div className="App">
      <header className="App-header">
        <h1>BestSearch</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <p>/</p>
            <Link to="/search">Go to /search</Link>
          </Route>
          <Route exact path="/search">
            <p>/search</p>
            <Button onClick={() => history.push('/')}>Go to /</Button>
          </Route>

          {/* 404 */}
          <Route path="*">
            {/* <NoMatch /> */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
