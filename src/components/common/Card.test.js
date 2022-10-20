import React from 'react';
import {render} from '@testing-library/react-native';
import Card from './Card';

describe('Test Card', () => {
  it('Card', () => {
    const wrapper = render(
      <Card onPress={() => {}} isFlipped={false} val={4} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
