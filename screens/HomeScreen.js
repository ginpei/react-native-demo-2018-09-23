import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as omikuji from '../constants/omikuji';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const onListPress = () => HomeScreen.onListPress(navigation);
    return {
      headerTitle: 'Hell World!',
      headerRight: (
        <TouchableOpacity style={styles.headerRight} onPress={onListPress}>
          <Text>一覧</Text>
        </TouchableOpacity>
      ),
    };
  };

  get resultImageSource() {
    return this.state.omikujiResult && this.state.omikujiResult.imageSource;
  }

  constructor (props) {
    super(props);
    this.state = {
      omikujiResult: null,
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
        {this.resultImageSource
          ? <Image
            style={styles.daikichiImage}
            resizeMode="contain"
            source={this.resultImageSource}
            />
          : <View style={styles.daikichiImage} />
        }
        <TouchableOpacity style={styles.tryButton} onPress={this.onTryPress}>
          <Text style={styles.tryButtonText}>おみくじを引く</Text>
        </TouchableOpacity>
      </View>
    );
  }

  static onListPress (navigation) {
    alert('list');
  }

  onTryPress () {
    this.setState({
      omikujiResult: omikuji.getRandomResult(),
    });
  }
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 16,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
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
    height: 300,
    width: 200,
  },
  tryButton: {
    backgroundColor: '#036',
    padding: 16,
  },
  tryButtonText: {
    color: 'white',
  },
});
