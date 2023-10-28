import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Cartitem from '../common/Cartitem';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromCart} from '../Redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
const navigation=useNavigation()
  return (
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <Cartitem
                onAddWishlist={x => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Item Added In cart ?</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom: 80}}>
          <CommonButton
            bgcolor={'black'}
            textcolor={'#fff'}
            title={'CheckOut'}
            onPress={()=>{
              navigation.navigate('CheckOut')
            }}
          />
         
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
