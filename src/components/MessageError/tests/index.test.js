import React from 'react';
import { shallow } from 'enzyme';
import MessageError from '../';

import Button from 'react-bootstrap/lib/Button';

const expected = {
  error: 'test error',
  onClick: jest.fn(),
  buttonText: 'test button text',
};

describe('<MessageError />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <MessageError />
    );
  });

  it('renders the error message', () => {
    actual.setProps({ error: expected.error });
    expect(actual.contains(expected.error)).toEqual(true);
  });

  it('renders the default button if onClick passed', () => {
    actual.setProps({ onClick: expected.onClick });
    expect(actual.exists(Button)).toEqual(true);
    expect(actual.contains('Home')).toEqual(true);
  });

  it('renders the custom button if onClick and buttonText passed', () => {
    actual.setProps({ onClick: expected.onClick });
    actual.setProps({ buttonText: expected.buttonText });
    expect(actual.exists(Button)).toEqual(true);
    expect(actual.contains(expected.buttonText)).toEqual(true);
  });

  it('calls the onClick when button clicked', () => {
    actual.setProps({ onClick: expected.onClick });
    actual.find(Button).simulate('click');
    expect(expected.onClick).toBeCalled();
  });
});
