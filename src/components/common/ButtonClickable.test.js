import React from 'react';
import {render} from '@testing-library/react-native';
import ButtonClickable from './ButtonClickable';

describe('Test ButtonClickable', () => {
  it('Button', () => {
    global.isAndroid = true;
    const wrapper = render(
      <ButtonClickable onPress={() => {}}>Restart</ButtonClickable>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // it('Button with enabled state with small size flag', () => {
  //   global.isAndroid = false;
  //   const wrapper = render(
  //     <ButtonClickable
  //       onPress={() => {}}
  //       isButtonDisabled={true}
  //       isSmallSizeButton={true}>
  //       SIGN IN
  //     </ButtonClickable>,
  //   );
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });

  // it('Button with enabled state with small size flag = false', () => {
  //   global.isAndroid = false;
  //   const wrapper = render(
  //     <ButtonClickable
  //       onPress={() => {}}
  //       isButtonDisabled={true}
  //       isSmallSizeButton={false}>
  //       SIGN IN
  //     </ButtonClickable>,
  //   );
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });

  // it('Button with disabled state', () => {
  //   global.isAndroid = true;
  //   const wrapper = render(
  //     <ButtonClickable onPress={() => {}} isButtonDisabled={true}>
  //       SIGN IN
  //     </ButtonClickable>,
  //   );
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });
  it('Button with disabled state (isAndroid = false)', () => {
    global.isAndroid = false;
    const wrapper = render(
      <ButtonClickable onPress={() => {}} isButtonDisabled={true}>
        SIGN IN
      </ButtonClickable>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
