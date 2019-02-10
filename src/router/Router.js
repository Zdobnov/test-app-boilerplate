import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Main from '../pages/Main';
import Secondary from '../pages/Secondary';

class Router extends Component {
  componentDidMount() {
    // axios usage
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data);
      })
  }

  render() {
    return (
      <BrowserRouter>
        {/* Here should be components/pages only */}
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
  }
}

export default Router;
