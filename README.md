# BestSearch

Bootstrap with [CRA](https://create-react-app.dev/) + [React Redux](https://react-redux.js.org/) + [React Router](https://reactrouter.com/) + [MUI](https://mui.com/) + [Recharts](https://recharts.org/).

Live demo: https://io-oi.me/bestsearch

## Quick Start

```sh
yarn install && yarn start
```

## Interacting with API

Edit `src/constants/index.js`, change `BESTSEARCH_BACKEND` to your backend API server.

Or run with fake mock API:

```sh
yarn start:mock
```

## Konwn Issues

- Refersh or visit app from _sub-route_ may got 404 error _on live demo_

  https://stackoverflow.com/a/46060999

## References

- https://react-redux.js.org/tutorials/quick-start
- https://www.youtube.com/watch?v=poQXNp9ItL4
- https://redux.js.org/tutorials/essentials/part-1-overview-concepts
- https://valdezdev.com/building-a-search-app-with-react-redux
- https://developer.okta.com/blog/2019/03/18/beginners-guide-to-redux
