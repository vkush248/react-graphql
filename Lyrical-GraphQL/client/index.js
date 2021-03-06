import React from 'react';
import ReactDOM from 'react-dom';
import AppolliClient, { ApolloClient } from 'apollo-client';
import { AppolloProvider, ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
          <Route path="songs/new" component={SongCreate}></Route>
          <Route path="songs/:id" component={SongDetail}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
