import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as omikuji from '../constants/omikuji';

export default class OmikujiListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'おみくじ結果一覧',
    };
  };

//   constructor (props) {
//     super(props);
//     this.state = {
//     };
//     this.onTryPress = this.onTryPress.bind(this);
//   }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('message', 'Hello World!')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
});
