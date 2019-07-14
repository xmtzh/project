import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './views/main/Main'

import Desc from './views/desc/Desc'
import * as serviceWorker from './serviceWorker';
import "lib-flexible"

import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <Route path='/desc' component={Desc}></Route>
      <Route path='/main' component={Main}></Route>
      <Redirect from="/" to="/main/home"/>
    </BrowserRouter>
  )

}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
