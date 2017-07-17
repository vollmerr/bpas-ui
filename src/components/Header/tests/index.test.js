import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import Header from '../';

const testTitle = 'test title';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<Header title={testTitle} />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});

  xit('toggles mobile view onToggle', () => {});

  xit('closes the mobile view onClick', () => {});
});
