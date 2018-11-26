import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

describe('<App />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null, <App />)).not.toThrow();
  });
});
