export const results = [
  {
    title: '大吉',
    imageSource: require('../assets/images/daikichi.png'),
  },
  {
    title: '中吉',
    imageSource: require('../assets/images/chukichi.png'),
  },
  {
    title: '小吉',
    imageSource: require('../assets/images/shokichi.png'),
  },
  {
    title: '末吉',
    imageSource: require('../assets/images/suekichi.png'),
  },
  {
    title: '大凶',
    imageSource: require('../assets/images/daikyo.png'),
  },
];

export function getRandomResult () {
  const index = Math.floor(Math.random() * results.length);
  return results[index];
}
