import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './src/MainContainer';
import {store} from './src/Redux/store/Store';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
  
      <Provider store={store}>
        <MainContainer />
      </Provider>

  );
};

export default App;
