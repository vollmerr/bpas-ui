import React from 'react';
import { shallow } from 'enzyme';
import Page from '../';

const Child = () => <div>child component</div>;
const testTitle = 'test title';

describe('<Page />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <Page title={testTitle}>
        <Child />
      </Page>,
      { context: { history: {} } }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });

  it('renders its children', () => {
    expect(actual.contains(<Child />)).toEqual(true);
  });
});
