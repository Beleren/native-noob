import React from 'react';
import { View, Button } from 'react-native';

const Home = (props) => {
  return (
    <View>
      <Button title="Vai pro guia !" onPress={() => props.navigation.navigate('Guide')} />
    </View>
  );
};

export default Home;
