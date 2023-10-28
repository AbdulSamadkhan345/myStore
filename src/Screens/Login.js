import {View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const[modalVisible,setModalVisible]=useState(false)
 
  const login = () => {
    setModalVisible(true)
    if (email == '') {
      setModalVisible(false)
      setBadEmail(true);
     
    } else {
      setBadEmail(false);
      if (Password == '') {
        setModalVisible(false)
        setBadPassword(true);
      } else {
        setBadPassword(false);
         setTimeout(()=>{
             getData()
         },2000)
      }
    }
  };
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail,mPass)
    if(email===mEmail && mPass ===Password){
      setModalVisible(false)
      navigation.navigate('Home')
    }
    else{
      setModalVisible(false)
      alert('case')
    }
  };
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 130,
          height: 130,
          alignSelf: 'center',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          marginTop: -15,
          alignSelf: 'center',
          fontSize: 33,
          fontWeight: '600',
          color: 'black',
        }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Enter Email ID'}
        icon={require('../images/2.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
          plaese Enter Email ID
        </Text>
      )}
      <CustomTextInput
        type={'Password'}
        placeholder={'Enter Password'}
        icon={require('../images/1.png')}
        value={Password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
          plaese Enter Password
        </Text>
      )}
      <CommonButton
        title={'Login'}
        bgcolor={'#000'}
        textcolor={'#fff'}
        onPress={() => {
          login()
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Craete New Account
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
};

export default Login;
