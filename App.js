import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Input, Text,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    console.log("Entrou")
    Alert.alert("Entrou","Login acessado")
  }

  return (
    <View style={styles.container}>
      <Text h3>Entre no TemTudaki!</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        onPress={() => entrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
