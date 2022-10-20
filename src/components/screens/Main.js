import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import Card from '../common/Card';
import ButtonClickable from '../common/ButtonClickable';

const Main = props => {
  const CARD_PAIRS_VALUE = props.CARD_PAIRS_VALUE;
  const TOTAL_CARDS = props.TOTAL_CARDS;

  const duplicateCard = () => {
    return CARD_PAIRS_VALUE.reduce((preValue, current, index, array) => {
      return preValue.concat([current, current]);
    }, []);
  };

  const [isFlipped, setIsFlipped] = useState(Array(TOTAL_CARDS).fill(false));
  const shuffle = duplicateCard().sort(() => Math.random() - 0.5);
  const [shuffledCard, setShuffleCard] = useState(shuffle);
  const [clickCount, setClickCount] = useState(1);
  const [prevSelectedCard, setPrevSelectedCard] = useState(-1);
  const [prevCardId, setPrevCardId] = useState(-1);
  const [moves, setMoves] = useState(0);

  const handleClick = (cardNum, index) => {
    const cardId = index;
    const newFlipps = isFlipped.slice();
    setPrevSelectedCard(shuffledCard[cardId]);
    setPrevCardId(cardId);
    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = true;
      setIsFlipped(prevState => newFlipps);
      setClickCount(clickCount + 1);
      if (clickCount === 2) {
        setClickCount(1);
        setMoves(moves + 1);
        const newCard = shuffledCard[cardId];
        const previousCard = prevSelectedCard;
        setTimeout(() => {
          isCardMatch(previousCard, newCard, prevCardId, cardId, newFlipps);
        }, 500);
      }
    }
  };
  useEffect(() => {
    if (isGameOver()) {
      Alert.alert(
        'Congratulations..!!',
        'You have finished the game with ' + moves + ' moves.',
        [
          {
            text: 'OK',
            onPress: () => {
              restartGame();
            },
          },
        ],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped]);

  const isCardMatch = (card1, card2, card1Id, card2Id, newFlipps) => {
    if (card1 === card2) {
      const hideCard = shuffledCard.slice();
      hideCard[card1Id] = card1;
      hideCard[card2Id] = card2;
      setIsFlipped(prevState => newFlipps);
      setTimeout(() => {
        setShuffleCard(hideCard);
      }, 500);
    } else {
      const flipBack = isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        setIsFlipped(flipBack);
      }, 500);
    }
  };

  const restartGame = () => {
    setIsFlipped(Array(TOTAL_CARDS).fill(false));
    setShuffleCard(shuffle);
    setClickCount(1);
    setPrevSelectedCard(-1);
    setPrevCardId(-1);
    setMoves(0);
  };

  const isGameOver = () => {
    return isFlipped.every((element, index, array) => element !== false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.flipText}>Flip Card</Text>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.cardContainer}>
          {shuffledCard.map((cardNum, index) => (
            <Card
              key={index}
              val={cardNum}
              testID="card"
              onPress={() => handleClick(cardNum, index)}
              isFlipped={isFlipped[index]}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.movesText}>Moves: {moves}</Text>
        <View style={styles.restartButtonContainer}>
          <ButtonClickable testID="restart" onPress={() => restartGame()}>
            Restart
          </ButtonClickable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  scrollViewContainer: {
    flex: 0.85,
  },
  cardContainer: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomContainer: {
    flex: 0.15,
  },
  restartButtonContainer: {
    alignSelf: 'center',
  },
  movesText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flipText: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    width: 200,
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
  button: {
    width: 100,
    height: 30,
    marginTop: 30,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64,
  },
});

export default Main;
