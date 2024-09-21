import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StockDetailsPage from './pages/StockDetailsPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stock/:id" component={StockDetailsPage} />
      </Switch>
    </Router>
  );
};

export default App;
