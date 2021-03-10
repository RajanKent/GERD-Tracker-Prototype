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
    paddingVertical: 15,

  },
  headerText: {
    fontSize: 17,
    fontFamily: 'mont-semi-bold',
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
    color: '#4C545B',
    fontFamily: 'mont-medium'
  },
  startDateContainer: {
    padding: 10,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startDateText: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  mainContent: {
    width: '100%',
    paddingHorizontal: 10,
  },
  listItemWrapper: {
    marginBottom: 100,
    marginTop: 10,
    paddingHorizontal: 10
  },
  listItemContainer: {
    padding: 20,
    marginHorizontal: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(66, 135, 245, 0.07)',
    borderRadius: 30,
  },
  listItemContainerInActive: {
    borderRadius: 10,
  },
  listItemContainerActive: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  listItemLeft: {
    backgroundColor: 'transparent'
  },
  listItemMiddle: {
    backgroundColor: 'transparent',
  },
  listItemRight: {
    backgroundColor: 'transparent'
  },
  listItemTitle: {
    fontSize: 18,
    color: '#8F9499',
    fontFamily: 'mont-semi-bold'
  },
  checkboxContainer: {},
  optionListWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 10,
    marginVertical: 10
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
  optionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLabelWrapper: {
    paddingVertical: 4,
    borderRadius: 7,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: 'lightgray',
  },
  optionLabelWrapperSelected: {
    // backgroundColor: '#4287f5' //00a9e0
  },

  optionLabel: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'mont-bold'
  },
  optionLabelSelected: {
    // color: 'white',
    // backgroundColor: 'transparent'
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#004b87',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 60
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'mont-semi-bold'
  }
});
