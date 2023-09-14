import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../const/colors';

const Input = ({label, error, password, onFocus = () => {}, ...props}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.labels}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.black
              : COLORS.white,
          },
        ]}>
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{color: 'black', flex: 1}}
          {...props}
        />
      </View>
      {error && (
        <Text style={{color: COLORS.red, fontSize: 12, marginTop: 7}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labels: {
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.darkGreen,
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
  },
});

export default Input;
