import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Cartitem = ({
  item,
  onRemoveItem,
  onAddWishlist,
  onREmoveFromWishlist,
  isWishList,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: '96%',
        height: 180,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        marginLeft: 20,
        marginBottom: 10,
        justifyContent: 'center',
        left: -10,
      }}>
      <View>
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
            marginTop: -6,
          }}>
          <Text>{item.price}</Text>
          {isWishList ? (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 4,
                marginTop: 0,
              }}
              onPress={() => {
                onAddToCart(item);
              }}>
              <Text style={{fontSize: 10}}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 4,
                marginTop: 0,
              }}
              onPress={() => {
                onRemoveItem(item);
              }}>
              <Text style={{fontSize: 10}}>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>
        {isWishList ? (
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
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
              onREmoveFromWishlist();
            }}>
            <Image
              source={require('../images/heartfill.png')}
              style={{width: 18, height: 18, tintColor: 'red'}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
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
              style={{width: 18, height: 18}}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Cartitem;
