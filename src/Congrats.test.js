import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from './test/testUtils';

const defaultProps = {
  success: false,
};

const setup = (props = {}, state) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe('<Congrats />', () => {
  it('does not throw any warning with expected props', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
  });

  describe('When "success" prop is true', () => {
    it('renders without crashing', () => {
      const wrapper = setup({ success: true });
      const component = findByTestAttr(wrapper, 'component-congrats');
      expect(component.length).toBe(1);
    });

    it('renders a congrats message', () => {
      const wrapper = setup({ success: true });
      const message = findByTestAttr(wrapper, 'congrats-message');
      expect(message.text().length).not.toBe(0);
    });
  });

  describe('When "success" prop is false', () => {
    it('should not render', () => {
      const wrapper = setup({ success: false });
      const component = findByTestAttr(wrapper, 'component-congrats');
      expect(component.length).toBe(0);
    });
  });
});
