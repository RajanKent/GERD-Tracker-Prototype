import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container: {
    width: '99%',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  scrollViewWrapper: {
    width: '100%',
    marginBottom: 100,
    marginTop: 10,
    paddingHorizontal: 10
  },
  scrollViewContainer: {
    marginHorizontal: 10,
    paddingBottom: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#004b87',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'mont-semi-bold',
    paddingLeft: 10
  }
});
