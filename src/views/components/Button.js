import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../const/colors';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: COLORS.white,
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
