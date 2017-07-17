import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

const testTitle = 'test title';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Header title={testTitle} />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});

  xit('toggles mobile view onToggle', () => {});

  xit('closes the mobile view onClick', () => {});
});
