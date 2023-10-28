import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import MyAddress from '../Screens/MyAddress';
let name = '';
const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          right: 125,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Profile</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
            left: 265,
          }}>
          <Image
            source={require('../images/settings.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../images/user2.png')}
        style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30}}
      />
      <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 18}}>
        {name}
      </Text>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          borderBottomWidth: 3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
        }}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}>
        <Text style={{marginLeft: 20}}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          borderBottomWidth: 3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
        }}  onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text style={{marginLeft: 20}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          borderBottomWidth: 3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
        }}>
        <Text style={{marginLeft: 20}}>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
