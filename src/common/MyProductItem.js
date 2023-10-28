import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MyProductItem = ({item, onAddToCart, onAddWishlist}) => {
  return (
    <View
      style={{
        width: 160,
        height: 180,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        marginLeft: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '70%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginBottom: 10,
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 6,
          paddingRight: 10,
          marginTop: -4,
        }}>
        <Text>{item.price}</Text>
        <TouchableOpacity
          style={{borderWidth: 1, borderRadius: 10, padding: 4, marginTop: 0}}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text style={{fontSize: 10}}>add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 24,
          height: 24,
          backgroundColor: 'white',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          onAddWishlist(item);
        }}>
        <Image
          source={require('../images/heart1.png')}
          style={{width: 16, height: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItem;
