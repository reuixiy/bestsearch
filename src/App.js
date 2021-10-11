import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BestSearch</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <p>/</p>
          </Route>
          <Route exact path="/search">
            <p>/search</p>
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
