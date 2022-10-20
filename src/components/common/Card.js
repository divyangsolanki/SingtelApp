import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import FlipCard from 'react-native-flip-card';

const Card = props => {
  return (
    <View style={styles.cardContainer} testID={props.testID}>
      <FlipCard style={styles.card} flip={props.isFlipped} clickable={true}>
        <TouchableOpacity style={styles.face} onPress={props.onPress}>
          <Text>Card </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={props.onPress}>
          <Text>{props.val}</Text>
        </TouchableOpacity>
      </FlipCard>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderColor: 'blue',
    borderWidth: 2,
    flexWrap: 'wrap',
  },
  card: {
    width: 100,
    height: 100,
  },
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
