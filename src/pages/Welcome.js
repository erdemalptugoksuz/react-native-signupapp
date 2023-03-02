import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to SignUp</Text>
      <Button text="Sign Up" onPress={null} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Welcome;
