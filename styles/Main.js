import { Platform, StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: height * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: width * 0.2,
    height: height * 0.2,
    top: 65
  },
  userChoices: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width
  },
  logIn: {
    flex: 1,
    width: width * 0.5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.4,
    marginTop: height * 0.05
  },
  logInText: {
    fontFamily: 'Montserrat-Light',
    color: '#353535',
    fontSize: 32
  },
  signUp: {
    flex: 1,
    width: width * 0.5,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.4,
    marginTop: height * 0.05
  },
  signUpText: {
    fontFamily: 'Montserrat-Light',
    color: '#353535',
    fontSize: 32
  },
  description: {
    width: width * 0.4,
    fontFamily: 'Montserrat-Medium'
  },
  directArrow: {
    width: 75,
    height: 75,
    backgroundColor: '#353535',
    borderRadius: 38,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.05,
        shadowRadius: 0
      },
      android: {
        elevation: 8
      }
    })
  },
  arrow: {
    color: '#DBEDB0'
  },
  bottomImage: {
    width,
    height: height * 0.42
  },
  fb: {
    width: width * 0.75,
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: height * 0.116,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 0
      },
      android: {
        height: height * 0.11,
        elevation: 5
      }
    }),
    justifyContent: 'center'
  },
  tw: {
    width: width * 0.65,
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: height * 0.116,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 0
      },
      android: {
        height: height * 0.11,
        elevation: 4
      }
    }),
    justifyContent: 'center'
  },
  google: {
    width: width * 0.55,
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: height * 0.118
      },
      android: {
        height: height * 0.11
      }
    }),
    justifyContent: 'center'
  },
  tagText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#353535',
    left: 40
  }
});
