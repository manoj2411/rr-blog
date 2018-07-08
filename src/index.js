import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import PostsIndex from './containers/posts_index';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise),
                                    window.devToolsExtension())(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
    <div>
      <p>Header</p>
      <Route path="/" component={PostsIndex} />
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'))
