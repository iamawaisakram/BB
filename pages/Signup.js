import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//style
import styles from '../styles/Signup';
import commonStyles from '../styles/Common';

//icons
import Icon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oc: false
    };
  }

  componentDidMount() {
    loc(this);
    this.textInputRef.focus();
  }

  componentWillUnMount() {
    rol();
    this.setState({ oc: false });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        style={{ width: wp('100%'), height: hp('100%') }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.directArrow}
        >
          <Icon name="arrow-long-left" style={styles.arrow} size={30} />
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.0, 0.99]}
          colors={['#FBED96', '#ABECD6']}
          style={styles.container}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>SignUp</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.0, 0.99]}
          colors={['#FBED96', '#ABECD6']}
          style={styles.bottomContainer}
        >
          <ImageBackground
            style={styles.signupImage}
            source={require('../assets/images/signup.png')}
          >
            <FIcon name="camera" style={styles.cameraIcon} size={30} />
          </ImageBackground>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#FFC3A0', '#FFAFBD']}
            style={styles.inputPanel}
          >
            <View style={styles.firstInput}>
              <Text style={styles.inputHeader}>NAME</Text>
              <TextInput
                style={styles.nameTextInput}
                ref={ref => (this.textInputRef = ref)}
                autoFocus={true}
                placeholder="Hristo Hristov"
                placeholderTextColor={'#353535'}
                selectionColor={'#353535'}
                onSubmitEditing={() => {
                  this.email.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.secondInput}>
              <Text style={styles.inputHeader}>EMAIL</Text>
              <TextInput
                style={styles.mailTextInput}
                placeholder="hristov123@gmail.com"
                ref={input => {
                  this.email = input;
                }}
                placeholderTextColor={'#353535'}
                selectionColor={'#353535'}
                onSubmitEditing={() => {
                  this.password.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.thirdInput}>
              <Text style={styles.inputHeader}>PASSWORD</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="*******"
                ref={input => {
                  this.password = input;
                }}
                placeholderTextColor={'#353535'}
                selectionColor={'#353535'}
                secureTextEntry={true}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#000000', '#434343']}
            style={styles.nextButton}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </LinearGradient>
        </LinearGradient>
      </KeyboardAwareScrollView>
    );
  }
}

export default Signup;
