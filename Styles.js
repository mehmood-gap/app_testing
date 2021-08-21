import {Dimensions, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';

export const AppColor = {
  color: {
    primaryAccent: 'white',
    primaryDark: 'black',
    secondaryAccent: 'fffeee',
    primaryText: '#E67E22',
    activeTint: '#E67E22',
    inActiveTint: '#bdc3c7',
    indicator: '#E67E22',
    description: 'grey',
    lightbackground: '#CACACA',
  },
};
var androidBaseUrl = 'http://192.168.18.15:8000/';
var iosBaseUrl = 'http://192.168.18.15:8000/';

export const AppUrl = {
  android: {
    baseUrl: androidBaseUrl + 'api/',
    imageUrl: androidBaseUrl + 'images/',
    reviewProduct: androidBaseUrl + 'api/review-product',
  },
  ios: {
    baseUrl: iosBaseUrl + 'api/',
    imageUrl: iosBaseUrl + 'images/',
  },
};
export const AppStyles = {
  indicator: {
    color: AppColor.color.primaryText,
    lightColor: 'white',
    size: 30,
  },
  illustration: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
  },
};
export const AppString = {
  en: {
    Screen1: 'Hello Screen1',
    Screen2: 'Hello Screen2',
    Screen3: 'Hello Screen3',
    Screen4: 'Hello Screen4',
    Screen5: 'Hello Screen5',
    internet: 'No internet',
    checkAgaininternet: ' Please Try again',
    tryAgain: 'tryAgain',
  },
  tr: {
    hotline: 'Yardım hattı',
    profile: 'Benim profilim',
  },
  fonts: {
    bold: 'Raleway-Bold',
    regular: 'Raleway-Regular',
    medium: 'Raleway-Medium',
  },
};
export const AppDimens = {
  dimensions: {
    bottomTabHeight:
      Platform.OS == 'ios'
        ? Dimensions.get('window').height * 0.1
        : Dimensions.get('window').height * 0.08,
    topBarHeight:
      Platform.OS == 'ios'
        ? Dimensions.get('window').height * 0.8
        : Dimensions.get('window').height * 0.8,
    // screenPaddingTop:
    //   Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? 34 : 24) : 0,
    // heading: Dimensions.get('window').width * 0.02,
  },
};

export const ImagesPath = {
  splash1: {
    uri: require('./src/Assets/Image/splash1.jpg'),
  },
  splash2: {
    uri: require('./src/Assets/Image/splash2.jpg'),
  },
  splash3: {
    uri: require('./src/Assets/Image/splash3.jpg'),
  },
  login: {
    uri: require('./src/Assets/Image/login.jpg'),
  },
  internet: {
    uri: require('./src/Assets/Image/404.jpg'),
  },
};
