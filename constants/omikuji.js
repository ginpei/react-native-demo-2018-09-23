export const results = [
  {
    id: 0,
    title: '大吉',
    imageSource: require('../assets/images/daikichi.png'),
  },
  {
    id: 1,
    title: '中吉',
    imageSource: require('../assets/images/chukichi.png'),
  },
  {
    id: 2,
    title: '小吉',
    imageSource: require('../assets/images/shokichi.png'),
  },
  {
    id: 3,
    title: '末吉',
    imageSource: require('../assets/images/suekichi.png'),
  },
  {
    id: 4,
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

export async function fetchResults () {
  const url = 'https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji';
  const fetchResult = await fetch(url);
  const omikujiResults = fetchResult.json();
  return omikujiResults;
}

export function postResult ({ name, result }) {
  const url = 'https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, result }),
  });
}