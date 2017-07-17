import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import TitleBar from '../TitleBar';

const testTitle = 'test title';

describe('<TitleBar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<TitleBar title={testTitle} />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('hides TitleText when isMobile', () => {});

  xit('passes the correct props down', () => {});
});
