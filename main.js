import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/views/App.jsx';
import MainPage from './client/views/mainPage.jsx';
import ProductsListPage from './client/views/productsListPage.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/mainPage' component={MainPage} />
      <Route path='/productsListPage' component={ProductsListPage} />
      <Route/>
    </div>
    </HashRouter>,
    document.getElementById('app')
  );
