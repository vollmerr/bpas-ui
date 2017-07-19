import React from 'react';
import { shallow } from 'enzyme';
import NavLink from '../NavLink';

const noOp = () => {};
const testLink = {
  text: 'test text',
  href: '/test-href',
  icon: 'home',
};

describe('<NavLink />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <NavLink link={testLink} onClick={noOp} />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
