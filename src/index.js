import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostsShow from './containers/posts_show';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise),
                                    window.devToolsExtension())(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
    <div>
      <p>Header</p>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'))
