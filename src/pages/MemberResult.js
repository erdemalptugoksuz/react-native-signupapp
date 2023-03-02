import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const MemberResult = ({route}) => {
  return (
    <SafeAreaView>
      <Text>Member Name: </Text>
      <Text>Member Lastname: </Text>
      <Text>Member Age: </Text>
      <Text>Member E-Mail: </Text>
      <Text>Member Country: </Text>
    </SafeAreaView>
  );
};

export default MemberResult;
