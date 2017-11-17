import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../../../app/components/navigation/Navigation';

describe('<Navigation />', () => {
  test('renders', () => {
    const NavigationComponent = shallow(<Navigation />);
    expect(NavigationComponent).toMatchSnapshot();
  });
});
