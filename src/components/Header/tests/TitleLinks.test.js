import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import TitleLinks from '../TitleLinks';

describe('<TitleLinks />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<TitleLinks />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
