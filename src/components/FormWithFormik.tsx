import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';

const FormWithFormik = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}>
        {({values, handleSubmit, handleChange}) => (
          <>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder="username"
                value={values.username}
                onChangeText={handleChange('username')}
              />
            </View>

            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder="e-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange('email')}
              />
            </View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
              />
            </View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder="passwordConfirm"
                secureTextEntry
                value={values.passwordConfirm}
                onChangeText={handleChange('passwordConfirm')}
              />
            </View>
            <View style={styles.item}>
              <Button title="Register" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormWithFormik;

const styles = StyleSheet.create({});
