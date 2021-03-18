import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // backgroundColor: '#004b87',
  },
  container: {
    width: '99%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  contentContainer: {
    width: '99%',
  },
  imageWrapper: {
    height: 170,
    width: 170,
    marginBottom: 20,
  },
  title: {
    color: '#414142',
    fontFamily: 'mont-bold',
    fontSize: 20,
  },
  subTitle: {
    color: '#414142',
    fontFamily: 'mont-semi-bold',
  },
  inputForm: {
    width: '80%',
    marginBottom: 40,
    paddingTop: 40,
  },

  scrollViewContainer: {
    marginHorizontal: 10,
    paddingBottom: 50,
  },
  questionContainer: {
    padding: 20,
    width: '100%',
    // backgroundColor: '#004b87',
    // backgroundColor: '#fff',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  questionSeparator: {
    paddingVertical: 0,
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 0.5,
  },
  indicatorStyle: {
    marginLeft: -20,
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
  textInput: {
    paddingTop: 15,
    borderBottomColor: '#e5e5e5',
    fontFamily: 'mont-medium',
    borderBottomWidth: 1,
    color: '#414142',
    height: 40,
  },
  buttonContainerLogin: {
    width: '90%',
    padding: 20,
    backgroundColor: '#004b87',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonContainerRegister: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    // marginTop: 20,
  },

  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'mont-semi-bold',
  },
  buttonLabelRegister: {
    color: '#004b87',
    textAlign: 'center',
    fontFamily: 'mont-semi-bold',
  },
});
