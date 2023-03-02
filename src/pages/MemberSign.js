import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userEMail, setUserEMail] = useState(null);
  const [userCountry, setUserCountry] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userLastName || !userAge || !userEMail || !userCountry) {
      Alert.alert('Sign Up', 'Bilgiler boş bırakılamaz!');
    }

    const user = {
      userName,
      userLastName,
      userAge,
      userEMail,
      userCountry,
    };

    navigation.navigate();
  };

  return (
    <SafeAreaView>
      <Input
        label="Member Name"
        placeholder="Enter your name..."
        onChangeText={setUserName}
      />
      <Input
        label="Member Lastname"
        placeholder="Enter your lastname..."
        onChangeText={setUserLastName}
      />
      <Input
        label="Member Age"
        placeholder="Enter your age..."
        onChangeText={setUserAge}
      />
      <Input
        label="Member E-Mail"
        placeholder="Enter your e-mail..."
        onChangeText={setUserEMail}
      />
      <Input
        label="Member Country"
        placeholder="Enter your country..."
        onChangeText={setUserCountry}
      />
      <Button text="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
