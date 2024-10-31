import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Form = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (text, input) => {
    setForm(prev => ({...prev, [input]: text}));
  };
  const handleSubmit = () => {
    if (!form.username) {
      return false;
    }
    if (!form.email) {
      return false;
    }
    if (!form.password) {
      return false;
    }
    if (!form.passwordConfirm || form.password !== form.passwordConfirm) {
      return false;
    }
    console.log(form);
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(form, null, 2)}</Text>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={form.username}
          onChangeText={text => handleChange(text, 'username')}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={text => handleChange(text, 'email')}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={form.password}
          onChangeText={text => handleChange(text, 'password')}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="passwordConfirm"
          secureTextEntry
          value={form.passwordConfirm}
          onChangeText={text => handleChange(text, 'passwordConfirm')}
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
