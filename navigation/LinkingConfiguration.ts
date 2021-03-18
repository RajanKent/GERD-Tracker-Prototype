import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          login: 'login',
          register: 'register'
        }
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'symptoms-daily'
            }
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'psqi'
            }
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'food-sleep'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
}
