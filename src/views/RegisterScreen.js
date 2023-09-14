import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';

import COLORS from '../const/colors';
import Input from './components/Input';
import Button from './components/Button';
import Loader from './components/Loader';

const RegisterScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Vui lòng nhập email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Vui lòng nhập địa chỉ email hợp lệ', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Vui lòng đầy đủ Họ và Tên', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Vui lòng nhập số điện thoại', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Vui lòng nhập mật khẩu', 'password');
      isValid = false;
    } else if (inputs.password.length < 6) {
      handleError('Mật khẩu có độ dài ít nhất 6 kí tự', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('user', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'bà sai chỗ nào rồi đó bà');
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#085728" barStyle={'light-content'} />
      <Loader visible={loading} />
      <View>
        {/* <View style={{height: 100}}>
          <Text style={styles.title}>Farmer</Text>
        </View> */}
        <View style={styles.sectionWrap}>
          <Text style={styles.Register}>Đăng ký</Text>

          {/*input */}
          <View style={{marginTop: 20}}>
            <Input
              placeholder="Nhập vào địa chỉ email"
              label="Email"
              onFocus={() => {
                handleError(null, 'email');
              }}
              onChangeText={text => handleOnChange(text, 'email')}
              error={errors.email}

            />
            <Input
              placeholder="Nhập vào Họ và Tên"
              label="Họ và Tên"
              onFocus={() => {
                handleError(null, 'fullname');
              }}
              onChangeText={text => handleOnChange(text, 'fullname')}
              error={errors.fullname}

            />
            <Input
              keyboardType="numeric"
              placeholder="Nhập số điện thoại"
              label="Số điện thoại"
              onFocus={() => {
                handleError(null, 'phone');
              }}
              onChangeText={text => handleOnChange(text, 'phone')}
              error={errors.phone}

            />
          </View>

          {/* password */}
          <View>
            <Input
              placeholder="Nhập mật khẩu"
              label="Mật khẩu"
              onFocus={() => {
                handleError(null, 'password');
              }}
              onChangeText={text => handleOnChange(text, 'password')}
              error={errors.password}
              password
            />
            <TouchableOpacity
              style={{
                marginTop: 20,
                position: 'absolute',
                right: 15,
                top: 35,
              }}>
              <Image source={require('../assets/images/eye.png')} />
            </TouchableOpacity>
          </View>

          {/* button register */}
          <View>
            <Button title="Đăng ký" onPress={validate} />
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={{
                color: COLORS.black,
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Đã có tài khoản? Đăng nhập
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGreen,
    height: '100%',
  },

  //   title: {
  //     marginTop: 70,
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //     fontSize: 40,
  //     color: COLORS.white,
  //     fontFamily: 'HappyMonkey-Regular',
  //   },

  sectionWrap: {
    height: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
  },

  Register: {
    marginTop: 50,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    left: 110,
    color: COLORS.darkGreen,
  },
});

export default RegisterScreen;
