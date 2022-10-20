import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/components/screens/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.CARD_PAIRS_VALUE = [0, 1, 2, 3];
    this.TOTAL_CARDS = 8;
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Main
          CARD_PAIRS_VALUE={this.CARD_PAIRS_VALUE}
          TOTAL_CARDS={this.TOTAL_CARDS}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
