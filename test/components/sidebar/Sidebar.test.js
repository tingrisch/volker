import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../../../app/components/sidebar/Sidebar';

describe('<Sidebar />', () => {
  test('renders', () => {
    const SidebarComponent = shallow(<Sidebar />);
    expect(SidebarComponent).toMatchSnapshot();
  });
});
