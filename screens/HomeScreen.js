import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as omikuji from '../constants/omikuji';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);
    this.state = {
      omikujiResult: omikuji.results[0],
    };
    this.onTryPress = this.onTryPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.topKaiunImage}
          source={require('../assets/images/kaiun.png')}/>
        <Text style={styles.topKaiunText}>今日の運勢は？</Text>
        <Image
          style={styles.daikichiImage}
          source={this.state.omikujiResult.imageSource}
          />
        <TouchableOpacity style={styles.tryButton} onPress={this.onTryPress}>
          <Text style={styles.tryButtonText}>おみくじを引く</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onTryPress () {
    this.setState({
      omikujiResult: omikuji.getRandomResult(),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
  },
  topBlock: {
  },
  topKaiunImage: {
    height: 50,
    width: 200,
  },
  topKaiunText: {
    fontSize: 40,
  },
  daikichiImage: {
    resizeMode: 'contain',
    height: 300,
    width: 200,
  },
  tryButton: {
    backgroundColor: '#036',
    padding: 8,
  },
  tryButtonText: {
    color: 'white',
  },
});
