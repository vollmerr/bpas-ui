import React from 'react';
import { shallow } from 'enzyme';
import Page from '../';

const Child = () => <div>child component</div>;
const testTitle = 'test title';

describe('<Page />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Page title={testTitle}>
        <Child />
      </Page>,
      { context: { history: {} } }
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders its children', () => {
    const wrapper = shallow(
      <Page title={testTitle}>
        <Child />
      </Page>,
      { context: { history: {} } }
    );
    expect(wrapper.contains(<Child />)).toEqual(true);
  });

  xit('passes the correct props down', () => { });
});
