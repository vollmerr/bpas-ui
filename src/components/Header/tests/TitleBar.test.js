import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from '../TitleBar';
import TitleText from '../TitleText';

const testTitle = 'test title';

describe('<TitleBar />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <TitleBar title={testTitle} />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });

  it('hides TitleText when isMobile', () => {
    actual.setProps({isMobile: true});
    expect(actual.find(TitleText).length).toEqual(0);
  });
});
