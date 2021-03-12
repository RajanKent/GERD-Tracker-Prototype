import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '99%',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  scrollViewContainer: {
    marginHorizontal: 10,
    paddingBottom: 50
  },
  questionContainer: {
    padding: 20,
    width: '100%',
    // backgroundColor: '#004b87',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10
  },
  indicatorStyle: {
    marginLeft: -20
  },
  questionLabel: {},
  questionLabelText: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '90%',
  },
  answerWrapper: {
    width: '100%',
  },
  textInput: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    height: 40
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#004b87',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'mont-semi-bold'
  }
});
