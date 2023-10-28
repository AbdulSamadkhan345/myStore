import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import {useNavigation} from '@react-navigation/native';
const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  const addressList = useSelector(state => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
  
    <SafeAreaView style={{flex: 1}}>
    
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, marginLeft: 10}}
                  />
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginTop: 10}}>{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 30,
              borderTopWidth: 0.5,
              height: 50,
              borderTopColor: '#8e8e8e',
            }}>
            <Text>Total :</Text>
            <Text>{getTotal()}</Text>
          </View>
          <View>
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
                      style={{borderWidth: 0.5, padding: 7, marginRight: 20}}
                      onPress={() => {
                        setSelectedAddress(
                          'City :' +
                            item.city +
                            ' ' +
                            ',Building: ' +
                            item.building +
                            ',Pincode: ' +
                            item.pincode,
                        );
                      }}>
                      <Text>Select Address</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <Text style={{margin: 8, fontSize: 17, marginRight: 3}}>
            Select Address
          </Text>
          <Text style={{margin: 1, fontSize: 17, top: -5}}>
            {selectedAddress == ''
              ? 'Please Select Address From Above List '
              : selectedAddress}
          </Text>
          <CommonButton
            bgColor={'black'}
            textColor={'white'}
            title={'Place Order'}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: require('../images/playstore.png'),
                currency: 'INR',
                key: 'rzp_test_0hE4fShT1FxgWO', // Your api key
                amount: 1000,
                name: 'mystore',
                prefill: {
                  email: 'myStore@gmail.com',
                  contact: '1234567890',
                  name: 'Abdulsamad',
                },
                theme: {color: '#000'},
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  alert(`Success: ${data.razorpay_payment_id}`);
                  dispatch(
                    addOrder({
                      items: cartData,
                      total: getTotal(),
                      address: selectedAddress,
                    }),
                  );
                  navigation.navigate('OrderSucess', {
                    status: 'success',
                  });
                })
                .catch(error => {
                  // handle failure
                  navigation.navigate('OrderSucess', {
                    status: 'success',
                  });
                });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
    
  );
};

export default Checkout;
