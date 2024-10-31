import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Form = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const handleSubmit = () => {
    console.log(username, email, password, passwordConfirm);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="passwordConfirm"
          secureTextEntry
          value={username}
          onChangeText={text => setPasswordConfirm(text)}
        />
      </View>
      <View style={styles.item}>
        <Button title="Register" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  item: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 24,
    width: '100%',
  },
});
