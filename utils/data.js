const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  ];

const comments = [
  'Decision Trackers are awesome',
  'Find My Phone is a useful app',
  'Learn Piano is not very good for learning Piano',
  'Starbase Defender is a great game, I love it',
  'Tower Defense is okay',
  'Monopoly Money is better than real money IMO',
  'Movie trailers are just the best parts of a movie distilled into 90 seconds',
  'Hello world, this is a comment',
  'Social media is a big waste of time',
  'Notes is my most used app',
  'Messages is open on my computer 24/7',
  'Email is open on my computer',
  'Compass is never opened',
  'Firefox is great for privacy',
];

const lorum = [
  'lorem',
  'imsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const getRandomPost = (words) => {
  let post = '';
  for (let i = 0; i < words; i++) {
    post += ` ${getRandomWord()}`;
  }
  return post;
};

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
const getRandomComments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      text: getRandomArrItem(comments),
      username: getRandomName().split(' ')[0],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomName,
  getRandomComments,
  getRandomPost,
  genRandomIndex,
};
