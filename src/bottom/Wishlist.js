import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Cartitem from '../common/Cartitem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, removeFromCart, removeFromWishlist} from '../Redux/actions/Actions';

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <Cartitem
            isWishList={'HI!'}
              item={item}
              onREmoveFromWishlist={()=>{
                dispatch(removeFromWishlist(index))
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
