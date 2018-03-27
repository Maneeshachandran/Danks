import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/views/App.jsx';
import MainPage from './client/views/mainPage.jsx';
import ProductsListPage from './client/views/productsListPage.jsx';
import ProductsPage from './client/views/productsPage.jsx';
import CfoDashboard from './client/views/cfoDashboard.jsx';
import PayableTrunover from './client/views/payableTurnover.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/mainPage' component={MainPage} />
      <Route path='/productsListPage' component={ProductsPage} />
      <Route path='/cfo' component={CfoDashboard} />
      <Route path='/payableTrunover' component={PayableTrunover} />
      <Route/>
    </div>
    </HashRouter>,
    document.getElementById('app')
  );
