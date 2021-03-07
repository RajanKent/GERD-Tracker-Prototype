import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'symptom-daily',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'psqi',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'food-sleep',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
