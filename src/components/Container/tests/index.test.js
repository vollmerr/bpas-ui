import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Container from '../';

describe('<Container />', () => {
  const Child = () => <div>child component</div>;
  const testClass = 'test-class';

  it('renders correctly', () => {
    const tree = renderer.create(
      <Container>
        <Child />
      </Container>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders its children', () => {
    const wrapper = shallow((
      <Container>
        <Child />
      </Container>
    ));
    expect(wrapper.contains(<Child />)).toEqual(true);
  });

  it('accepts addditional props', () => {
    const wrapper = shallow(
      <Container className={testClass}>
        <Child />
      </Container>
    );
    expect(wrapper.props()).toHaveProperty('className', testClass);
  });
});
