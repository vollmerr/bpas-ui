import React from 'react';
import { shallow } from 'enzyme';
import Container from '../';

describe('<Container />', () => {
  const Child = () => <div>child component</div>;
  const testClass = 'test-class';

  let actual;
  beforeEach(() => {
    actual = shallow(
      <Container>
        <Child />
      </Container>
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });

  it('renders its children', () => {
    expect(actual.contains(<Child />)).toEqual(true);
  });

  it('accepts addditional props', () => {
    actual.setProps({className: testClass});
    
    expect(actual.props()).toHaveProperty('className', testClass);
  });
});
