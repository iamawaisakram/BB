import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
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

//styles
import styles from '../styles/Main';
import commonStyles from '../styles/Common';

//icons
import Icon from 'react-native-vector-icons/Entypo';

export default class Main extends Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  render() {
    return (
      <ScrollView style={{ width: wp('100%'), height: hp('100%') }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.0, 0.99]}
          colors={['#FBED96', '#ABECD6']}
          style={styles.container}
        >
          <Image
            style={styles.logo}
            source={require('../assets/images/LOGO.png')}
          />
          <View style={styles.userChoices}>
            <View style={styles.logIn}>
              <Text style={styles.logInText}>Log in</Text>
              <Text style={styles.description}>
                Lorem ntempor quam, et lania sapien dolors amet.
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                style={styles.directArrow}
              >
                <Icon name="arrow-long-right" style={styles.arrow} size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.signUp}>
              <Text style={styles.signUpText}>Sign up</Text>
              <Text style={styles.description}>
                Lorem ntempor quam, et lania sapien dolors amet.
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                style={styles.directArrow}
              >
                <Icon name="arrow-long-right" style={styles.arrow} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <ImageBackground
          source={require('../assets/images/bottomBackground.png')}
          style={styles.bottomImage}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#E0C3FC', '#8EC5FC']}
            style={styles.fb}
          >
            <Text style={styles.tagText}>FACEBOOK</Text>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#C2E9FB', '#A1C4FD']}
            style={styles.tw}
          >
            <Text style={styles.tagText}>TWITTER</Text>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#FDD6BD', '#F794A4']}
            style={styles.google}
          >
            <Text style={styles.tagText}>GOOGLE PLUS</Text>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
    );
  }
}
