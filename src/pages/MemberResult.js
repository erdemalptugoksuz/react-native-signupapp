import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.hello}>Welcome!</Text>
      <Text style={styles.label}>Member Name: {user.userName}</Text>
      <Text style={styles.label}>Member Lastname: {user.userLastName}</Text>
      <Text style={styles.label}>Member Age: {user.userAge}</Text>
      <Text style={styles.label}>Member E-Mail: {user.userEMail}</Text>
      <Text style={styles.label}>Member Country: {user.userCountry}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '500',
    margin: 10,
  },
  hello: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MemberResult;
