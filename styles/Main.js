import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: hp('65%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: wp('20%'),
    height: hp('20%'),
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
    width: wp('50%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp('40%'),
    marginTop: hp('5%')
  },
  logInText: {
    fontFamily: 'Montserrat-Light',
    color: '#353535',
    fontSize: 32
  },
  signUp: {
    flex: 1,
    width: wp('50%'),
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('40%'),
    marginTop: hp('5%')
  },
  signUpText: {
    fontFamily: 'Montserrat-Light',
    color: '#353535',
    fontSize: 32
  },
  description: {
    width: wp('40%'),
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
    height: hp('42%'),
    width: undefined,
    alignSelf: 'stretch',
    flex: 1
  },
  fb: {
    width: wp('75%'),
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: hp('11.6%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 0
      },
      android: {
        height: hp('11%'),
        elevation: 5
      }
    }),
    justifyContent: 'center'
  },
  tw: {
    width: wp('65%'),
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: hp('11.6%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 0
      },
      android: {
        height: hp('11%'),
        elevation: 4
      }
    }),
    justifyContent: 'center'
  },
  google: {
    width: wp('55%'),
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        height: hp('11.8%')
      },
      android: {
        height: hp('11%')
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
