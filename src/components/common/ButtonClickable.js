import React from 'react';
import {Text, Button, View, TouchableOpacity} from 'react-native';

const ButtonClickableIOS = theProps => {
  const {textStyleLocal, buttonCommonStyle, textBody} = styles;

  const {onPress, children, textStyle, testID} = theProps.props;

  return (
    <View style={buttonCommonStyle}>
      <Text style={[textStyleLocal, textStyle, textBody]}>{children}</Text>
      <Button
        testID={testID}
        onPress={onPress}
        title={
          '                                \n                                \n                                '
        }
      />
    </View>
  );
};

const ButtonClickableAndroid = theProps => {
  const {textStyleLocal, buttonCommonStyle, textBody} = styles;

  const {onPress, children, textStyle, testID} = theProps.props;

  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <View style={buttonCommonStyle}>
        <Text style={[textStyleLocal, textStyle, textBody]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButtonClickable = theProps => {
  return global.isAndroid ? (
    <ButtonClickableAndroid props={theProps} />
  ) : (
    <ButtonClickableIOS props={theProps} />
  );
};

const styles = {
  textStyleLocal: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 14,
    letterSpacing: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  textBody: {
    position: 'absolute',
    width: 260,
  },
  buttonCommonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#003566',
  },
};

export default ButtonClickable;
