import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import { shallow } from 'enzyme';
import Page from '../';

const Child = () => <div>child component</div>;
const testTitle = 'test title';

describe('<Page />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(
        <Page title={testTitle}>
          <Child />
        </Page>
      )
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders its children', () => {
    const wrapper = shallow(
      testRouter(
        <Page title={testTitle}>
          <Child />
        </Page>
      )
    );
    expect(wrapper.contains(<Child />)).toEqual(true);
  });

  xit('passes the correct props down', () => {});
});
