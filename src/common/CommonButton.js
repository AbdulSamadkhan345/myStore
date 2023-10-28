import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const CommonButton = ({onPress, title, bgcolor, textcolor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 32,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textcolor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
