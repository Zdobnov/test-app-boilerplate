import React from 'react';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('Main page', () => {
  const defaultProps = {};
  const renderComponent = props =>
    shallow(
      <Main
        {...defaultProps}
        {...props}
      />
    );

  it('should render component', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });
});
