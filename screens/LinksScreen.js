import React from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  links = [
    {
      icon: require('../assets/images/GitHub-Mark-64px.png'),
      label: 'ギンペイ',
      url: 'https://github.com/ginpei',
    },
    {
      icon: require('../assets/images/GitHub-Mark-64px.png'),
      label: 'ワークショップ詳細',
      url: 'https://github.com/katsumeshi/react-native-workshop-0922',
    },
  ];

  constructor (props) {
    super(props);
  }

  render() {
    const anItem = this.links[0];
    return (
      <View style={styles.container}>
        <FlatList
          data={this.links}
          keyExtractor={(v) => v.url}
          renderItem={({ item }) => {
            const onPress = () => this.onPressLink(item);
            return (
              <TouchableOpacity
                style={styles.linkItem}
                onPress={onPress}
                >
                <Image style={styles.linkIcon} source={item.icon}/>
                <Text style={styles.linkText}>{item.label}</Text>
              </TouchableOpacity>
            );
          }}
          />
      </View>      
    );
  }

  onPressLink (link) {
    Linking.openURL(link.url);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  linkItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 16,
  },
  linkIcon: {
    height: 25,
    marginRight: 16,
    resizeMode: 'contain',
    width: 25,
  },
  linkText: {
    fontSize: 20,
  },
});
