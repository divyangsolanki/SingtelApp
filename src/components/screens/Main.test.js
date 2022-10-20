import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Main from './Main';

describe('Test Main Component', () => {
  it('Main snapshot', () => {
    const wrapper = render(<Main CARD_PAIRS_VALUE={[0, 1]} TOTAL_CARDS={4} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Main handleClick [Matched card]', () => {
    const wrapper = render(<Main CARD_PAIRS_VALUE={[0]} TOTAL_CARDS={2} />);
    const {getAllByTestId} = wrapper;
    fireEvent.press(getAllByTestId('card')[0]);
    fireEvent.press(getAllByTestId('card')[1]);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Main handleClick [Unmatched card]', () => {
    const wrapper = render(<Main CARD_PAIRS_VALUE={[0, 1]} TOTAL_CARDS={4} />);
    const {getAllByTestId} = wrapper;
    fireEvent.press(getAllByTestId('card')[0]);
    fireEvent.press(getAllByTestId('card')[1]);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Main restart', () => {
    const wrapper = render(<Main CARD_PAIRS_VALUE={[0]} TOTAL_CARDS={2} />);
    const {getByTestId} = wrapper;
    fireEvent.press(getByTestId('restart'));
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
