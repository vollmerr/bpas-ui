import React from 'react';
import { shallow } from 'enzyme';
import TitleText from '../TitleText';

const testTitle = 'test title';

describe('<TitleText />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <TitleText title={testTitle} />
    );
    expect(tree).toMatchSnapshot();
  });
});
