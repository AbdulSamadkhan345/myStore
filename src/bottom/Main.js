import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import Banner from '../common/Banner';
import {products} from '../Screens/Products';
import {FlatList} from 'react-native';
import MyProductItem from '../common/MyProductItem';
import {addItemToCart, addToWishlist} from '../Redux/actions/Actions';
import {useDispatch, useSelector} from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setcategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoelist, setshoeList] = useState([]);
  const [jacketList, setjacketList] = useState([]);
  const [slippersList, setSlippersList] = useState([]);
  const [trousersList, setTrousersList] = useState([]);

  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setcategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setshoeList(products.category[2].data);
    setjacketList(products.category[3].data);
    setSlippersList(products.category[4].data);
    setTrousersList(products.category[5].data);
    console.log(JSON.stringify(products.category[0]));
  }, []);
  //const item = useSelector(state => state);
  //console.log(item);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Header />
        <Banner />
        <View style={{marginTop: 10}}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New T Shirts
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={shoelist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jackets
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={jacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Slippers
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={slippersList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 5}}>
          <FlatList
            data={trousersList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
