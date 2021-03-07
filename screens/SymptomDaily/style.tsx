import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#004b87', // '#4287f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginTop: 10
      }
    }),
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '97%',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  startDateContainer: {
    padding: 10,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startDateText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  listItemWrapper: {
    width: '100%',
    marginTop: 10,
    // marginVertical: 10,
    // marginBottom: 20,
    paddingHorizontal: 10,
  },
  listItemContainer: {
    backgroundColor: 'rgba(66, 135, 245, 0.2)',
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  checkbox: {
    margin: 8,
  },
  optionListWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ededed'
  },
  optionItemLabelContainer: {
    borderBottomWidth: 1,
    borderColor: '#ededed'
  },
  optionItemLabel: {
    paddingBottom: 10
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
  },
  optionLabelWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 7,
    // borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionLabelWrapperSelected: {
    // backgroundColor: '#4287f5' //00a9e0
  },
  optionLabel: {
    fontSize: 10
  },
  optionLabelSelected: {
    // color: 'white'
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#004b87',
    borderRadius: 20,
    marginVertical: 30,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center'
  }
});
