/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isValid = true;

const Signup = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('');
  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badconfirmPassword, setBadconfirmPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const Signup = () => {
    setbuttonDisabled(true);
    if (name == '') {
      setBadName(true);
      setbuttonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setbuttonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setbuttonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
        } else {
          setBadMobile(false);
          if (Password == '') {
            setBadPassword(true);
            setbuttonDisabled(false);
          } else {
            setBadPassword(false);
          }
          if (confirmPassword == '') {
            setBadconfirmPassword(true);
            setbuttonDisabled(false);
          } else {
            setBadconfirmPassword(false);
            if (Password !== confirmPassword) {
              setBadconfirmPassword(true);
            } else {
              setBadconfirmPassword(false);
              saveData();
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('MOBILE', mobile);
      await AsyncStorage.setItem('PASSWORD', Password);
      await AsyncStorage.setItem('CONFIRMPASSWORD', confirmPassword);
      console.log(':yes');
      navigation.goBack();
    }
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
            fontSize: 23,
            fontWeight: '600',
            color: 'black',
          }}>
          Craete New Account
        </Text>
        <CustomTextInput
          placeholder={'Enter Full Name'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          icon={require('../images/4.png')}
        />
        {badName === true && (
          <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
            plaese Enter Name
          </Text>
        )}
        <CustomTextInput
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          placeholder={'Enter Email ID'}
          icon={require('../images/2.png')}
        />
        {badEmail === true && (
          <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
            plaese Enter Email ID
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter Mobile No'}
          keyboardType={'number-pad'}
          value={mobile}
          onChangeText={txt => {
            setMobile(txt);
          }}
          icon={require('../images/3.png')}
        />
        {badMobile === true && (
          <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
            plaese Enter Mobile No
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter Password'}
          value={Password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          icon={require('../images/1.png')}
        />
        {badPassword === true && (
          <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
            plaese Enter Password
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter confirm Password'}
          value={Password}
          onChangeText={txt => {
            setconfirmPassword(txt);
          }}
          icon={require('../images/1.png')}
        />
        {badconfirmPassword === true && (
          <Text style={{marginTop: 5, alignSelf: 'center', color: 'red'}}>
            plaese Enter confirm Password
          </Text>
        )}
        <CommonButton
          title={'Signup'}
          bgcolor={buttonDisabled ? '#8e8e8e' : '#000'}
          textcolor={'#fff'}
          onPress={() => {
            Signup();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already Have Account
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
