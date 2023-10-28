import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAddress} from '../Redux/actions/Actions';

let addressList = [];
const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  const dispatch = useDispatch();
  console.log(addressList);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          right: 70,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>My Address</Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
            left: 160,
            borderWidth: 1,
            padding: 4,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '95%',

                borderWidth: 0.8,
                borderColor: '#8e8e8e',
                alignSelf: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{color: 'black'}}>
                  {'City Name: ' + item.city}
                </Text>
                <Text style={{color: 'black'}}>
                  {'Address: ' + item.building}
                </Text>
                <Text style={{color: 'black'}}>
                  {'Pin code: ' + item.pincode}
                </Text>
              </View>
              <TouchableOpacity
                style={{borderWidth: 0.2, padding: 7, marginRight: 20}}
                onPress={() => {
                  dispatch(deleteAddress(index));
                }}>
                <TouchableOpacity>
                    <Image
                      source={require('../images/delete.png')}
                      style={{height: 15, width: 15, top:15, left: 25}}
                    />
                  </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    borderWidth: 0.5,
                    borderRadius: 19,
                    height: 30,
                    right: -18,
                    top:-7
                  }}>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;
