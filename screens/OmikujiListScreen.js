import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import * as omikuji from '../constants/omikuji';

function OmikujiResult (props = {}) {
  const result = omikuji.getResultOf(props.result);
  if (!result) {
    throw new Error(`Unknown omikuji ID: ${props.result}`);
  }

  return (
    <View style={styles.omikujiResult}>
      <Image
        style={styles.omikujiImage}
        resizeMode="contain"
        source={result.imageSource}
        />
      <Text style={styles.omikujiDateText}>
        {new Date(props.created_at).toLocaleString()}
      </Text>
      <Text style={styles.omikujiDateText}>
        {`By ${props.name}`}
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
    return this.state.results
      .sort((v1, v2) => {
        const t1 = new Date(v1.created_at).getTime();
        const t2 = new Date(v2.created_at).getTime();
        return t2 - t1;
      });
  }

  constructor (props) {
    super(props);
    this.state = {
      fetching: true,
      results: [],
    };
    // this.onTryPress = this.onTryPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fetching ? (
          <View style={styles.noResultWrapper}>
            <Text>Loading...</Text>
          </View>
        ) : this.results.length < 1 ? (
          <View style={styles.noResultWrapper}>
            <Text>No results.</Text>
          </View>
        ) : (
          <FlatList
            data={this.results}
            keyExtractor={(item) => item.created_at}
            renderItem={({ item }) => <OmikujiResult {...item}/>}
            />
        )}
      </View>
    );
  }

  async componentWillMount () {
    const results = await omikuji.fetchResults();
    this.setState({
      fetching: false,
      results,
    })
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
