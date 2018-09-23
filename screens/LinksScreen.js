import React from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  links = [
    {
      icon: require('../assets/images/GitHub-Mark-64px.png'),
      label: 'ソースコード',
      url: 'https://github.com/ginpei/react-native-demo-2018-09-23',
    },
    {
      icon: require('../assets/images/GitHub-Mark-64px.png'),
      label: 'ワークショップ詳細',
      url: 'https://github.com/katsumeshi/react-native-workshop-0922',
    },
    {
      label: 'モバイルアプリ開発経aaa験５年以上！Yuki氏によるReact Nativeワークショップ | Frog',
      url: 'https://frogagent.com/event/yuki-reactnative/',
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
          style={styles.linkList}
          data={this.links}
          keyExtractor={(v) => v.url}
          renderItem={({ item }) => {
            const onPress = () => this.onPressLink(item);
            return (
              <TouchableOpacity
                style={styles.linkItem}
                onPress={onPress}
                >
                {item.icon ? (
                  <Image style={styles.linkIcon} resizeMode="contain" source={item.icon}/>
                ) : (
                  <View style={styles.linkIcon}/>
                )}
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
  linkList: {
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
  linkItem: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    flexDirection: 'row',
    padding: 16,
  },
  linkIcon: {
    flex: 0,
    height: 25,
    marginRight: 16,
    width: 25,
  },
  linkText: {
    flex: 1,
    fontSize: 20,
  },
});
