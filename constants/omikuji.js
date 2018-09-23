export const results = [
  {
    id: 'daikichi',
    title: '大吉',
    imageSource: require('../assets/images/daikichi.png'),
  },
  {
    id: 'chukichi',
    title: '中吉',
    imageSource: require('../assets/images/chukichi.png'),
  },
  {
    id: 'shokichi',
    title: '小吉',
    imageSource: require('../assets/images/shokichi.png'),
  },
  {
    id: 'suekichi',
    title: '末吉',
    imageSource: require('../assets/images/suekichi.png'),
  },
  {
    id: 'daikyo',
    title: '大凶',
    imageSource: require('../assets/images/daikyo.png'),
  },
];

export function getRandomResult () {
  const index = Math.floor(Math.random() * results.length);
  return results[index];
}

export function getResultOf (id) {
  return results.find((v) => v.id === id);
}
