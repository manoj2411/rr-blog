import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <div> Home Page !!! </div>;
  }
}

class Hello extends React.Component {
  render() {
    return <div> Holu ! </div>;
  }
}

class Bye extends React.Component {
  render() {
    return <div> Tada ! </div>;
  }
}


ReactDOM.render( <BrowserRouter>
  <div>
    <p>Header</p>
    <Route path="/hello" component={Hello} />
    <Route path="/bye" component={Bye} />
  </div>
</BrowserRouter>, document.querySelector('.container'))
