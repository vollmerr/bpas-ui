import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../';

process.env.VERSION = 'test 123';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <Footer />,
      { context: {history: {}} }
    );
    expect(actual).toMatchSnapshot();
  });
});
