import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

const testTitle = 'test title';

describe('<Header />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <Header title={testTitle} />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });

  it('toggles mobile view in handleNavToggle', () => {
    // open mobile nav in mobile view
    actual.setState({mobileNavVisible: true});
    actual.setState(({isMobile: true}));

    // toggle mobile nav, should now be closed
    actual.instance().handleNavToggle();
    expect(actual.state('mobileNavVisible')).toEqual(false);

    // toggle again, should now be open
    actual.instance().handleNavToggle();
    expect(actual.state('mobileNavVisible')).toEqual(true);
  });

  it('closes the mobile view in handleNavClose', () => {
    // open mobile nav in mobile view
    actual.setState({mobileNavVisible: true});
    actual.state(({isMobile: true}));

    // close mobile nav
    actual.instance().handleNavClose();
    expect(actual.state('mobileNavVisible')).toEqual(false);

    // attempt to close again, should remain closed
    actual.instance().handleNavClose();
    expect(actual.state('mobileNavVisible')).toEqual(false);
  });
});
