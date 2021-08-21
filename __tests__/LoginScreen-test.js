// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from '../src/Screens/LoginScreen';

describe("LoginScreen", () => {
  it("should render Login Screen", () => {
    const component = shallow(<LoginScreen />);
    // expect(component.getElements()).toMatchSnapshot();
  });
});