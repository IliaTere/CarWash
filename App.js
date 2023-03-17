import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const MyComponent = () => {
  const handleButton1Press = () => {
    console.log('Button 1 pressed');
  };


  return (
    <View style={styles.container}>
      <Button title="Выбрать время" onPress={handleButton1Press} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
