import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: hp('12%'),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        top: 15
      },
      android: {}
    })
  },
  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 28
  },
  directArrow: {
    width: 75,
    height: 75,
    backgroundColor: '#353535',
    borderRadius: 38,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,

    position: 'absolute',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        zIndex: 1111,
        top: 50
      },
      android: {
        elevation: 8,
        zIndex: 1111,
        top: 30
      }
    })
  },
  arrow: {
    color: '#DBEDB0'
  },
  bottomContainer: {
    height: hp('92%'),
    alignItems: 'center'
  },
  signupImage: {
    position: 'absolute',
    zIndex: 1111,
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        height: hp('30%'),
        width: wp('80%'),
        top: 60,
        left: 20
      },
      android: {
        height: hp('40%'),
        width: wp('80%'),
        top: 50,
        left: 15
      }
    })
  },
  inputPanel: {
    height: hp('65%'),
    width: wp('70%'),
    borderRadius: 10,
    top: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraIcon: {
    color: 'white',
    position: 'absolute',
    top: 10,
    right: 25
  },
  firstInput: {
    height: hp('10%'),
    top: 80
  },
  secondInput: {
    height: hp('10%'),
    top: 90
  },
  thirdInput: {
    height: hp('10%'),
    top: 100
  },
  nameTextInput: {
    borderBottomWidth: 2,
    width: wp('60%'),
    borderColor: '#34323D',
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        height: 40
      }
    })
  },
  mailTextInput: {
    borderBottomWidth: 2,
    width: wp('60%'),
    borderColor: '#34323D',
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        height: 40
      }
    })
  },
  passwordInput: {
    borderBottomWidth: 2,
    width: wp('60%'),
    borderColor: '#34323D',
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        height: 40
      }
    })
  },
  nextButton: {
    width: wp('30%'),
    height: hp('7%'),
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        bottom: 100,
        right: 20
      },
      android: {
        right: 20,
        bottom: 85
      }
    })
  },
  inputHeader: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  }
});
