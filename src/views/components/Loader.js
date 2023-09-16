import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../../const/colors';

const Loader = ({visible = false}) => {
  const {height, width} = useWindowDimensions();

  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator style={{marginLeft: 50}} size="large" color={COLORS.darkGreen} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              fontFamily: 'Poppins-Medium',
            }}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
});
export default Loader;
