import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Secondary extends Component {
  render() {
    return (
      <div>
        I am Secondary page
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Secondary;
