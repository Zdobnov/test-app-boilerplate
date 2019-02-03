import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Main from '../pages/Main';
import Secondary from '../pages/Secondary';

const Router = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secondary/">Secondary</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Main} />
      <Route path="/secondary/" component={Secondary} />
    </div>
  </BrowserRouter>
);

export default Router;
