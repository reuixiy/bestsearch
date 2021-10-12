import { Switch, Route, Redirect } from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          mt: '8em',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />

          {/* 404 */}
          <Route path="*">
            {/* <NoMatch /> */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </Container>
    </>
  )
}
