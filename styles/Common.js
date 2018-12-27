import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  mainContainer: {
    height,
    width
  },
  imageSignup: {
    position: 'absolute',
    zIndex: 1111,
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        height: hp('30%'),
        width: wp('80%'),
        top: 60,
        left: 60
      },
      android: {
        height: hp('40%'),
        width: wp('80%'),
        top: 50,
        left: 15
      }
    })
  }
});
