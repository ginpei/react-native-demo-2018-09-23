import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import * as omikuji from '../constants/omikuji';

function OmikujiResult (props = {}) {
  const result = omikuji.getResultOf(props.id);
  if (!result) {
    throw new Error(`Unknown omikuji ID: ${props.id}`);
  }

  return (
    <View style={styles.omikujiResult}>
      <Image
        style={styles.omikujiImage}
        resizeMode="contain"
        source={result.imageSource}
        />
      <Text style={styles.omikujiDateText}>
        {new Date(props.createdAt).toLocaleString()}
      </Text>
    </View>
  );
}

export default class OmikujiListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'おみくじ履歴',
    };
  };

  get results () {
    const results = this.props.navigation.getParam('results', [])
      .map((v) => { v.key = v.createdAt.toString(); return v; })
      .sort((v1, v2) => v2.createdAt - v1.createdAt);
    return results;
  }

//   constructor (props) {
//     super(props);
//     this.state = {
//     };
//     this.onTryPress = this.onTryPress.bind(this);
//   }

  render() {
    return (
      <View style={styles.container}>
        {this.results.length < 1 ? (
          <View style={styles.noResultWrapper}>
            <Text>No results.</Text>
          </View>
        ) : (
          <FlatList
            data={this.results}
            renderItem={({ item }) => <OmikujiResult {...item}/>}
            />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noResultWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
  omikujiResult: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
  omikujiImage: {
    height: 300,
    width: 200,
  },
  omikujiDateText: {
  },
});
