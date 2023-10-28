import {View, Image, TouchableOpacity,Text} from 'react-native';
import React, {useState} from 'react';
import Search from '../bottom/Search';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import Main from '../bottom/Main';
import Cart from '../bottom/Cart';
import { useSelector } from 'react-redux';

const Home = () => {
  const [selectedTab, setselectedTab] = useState(0);


  const data=useSelector(state => state)
  
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 63,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(0);
          }}>
          <Image
            source={require('../images/house.png')}
            style={{
              width: 33,
              height: 33,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              width: 26,
              height: 26,
              tintColor: selectedTab == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: selectedTab == 2 ? 'green' : '#000',
              borderRadius: 23,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setselectedTab(2);
            }}>
            <Image
              source={require('../images/5.png')}
              style={{width: 25, height: 25, tintColor: '#fff'}}
            />
            <View
              style={{
                width: 18,
                height: 18,
                backgroundColor: 'red',
                borderRadius:10,
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute',
                top:-1.5,
                right:-2,
              }}>
              <Text style={{color:'#fff',fontweight:'600',top:-1,right:-0.5}}>
              {data.Reducers. length}
              </Text>
              </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(3);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 28,
              height: 28,
              tintColor: selectedTab == 3 ? '#000' : '#8e8e8e',
            }}
          />
          <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: 'red',
                borderRadius:10,
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute',
                top:10,
                right:12,
              }}>
              <Text style={{color:'#fff',fontweight:'600',fontSize:12}}>
              {data.Reducers2. length}
              </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(4);
          }}>
          <Image
            source={require('../images/4.png')}
            style={{
              width: 28,
              height: 28,
              tintColor: selectedTab == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
