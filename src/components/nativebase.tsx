import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import {Box, FormControl, Input, WarningOutlineIcon} from 'native-base';
// import validationSchema from './validation';

const NativeBase = () => {
  const {values, errors, handleSubmit, handleChange} = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    // validationSchema,
  });
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(errors, null, 2)}</Text>

      <Box alignItems="center" mb={4}>
        <FormControl isInvalid={errors.username && touched.username} w="100%">
          <Input
            style={styles.input}
            placeholder="username"
            value={values.username}
            onChangeText={handleChange('username')}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={4}>
        <FormControl isInvalid={errors.email && touched.email} w="100%">
          <Input
            style={styles.input}
            placeholder="e-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize="none"
            keyboardType="email-address"
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={4}>
        <FormControl isInvalid={errors.password && touched.password} w="100%">
          <Input
            style={styles.input}
            placeholder="password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={4}>
        <FormControl
          isInvalid={errors.passwordConfirm && touched.passwordConfirm}
          w="100%">
          <Input
            style={styles.input}
            placeholder="passwordConfirm"
            secureTextEntry
            value={values.passwordConfirm}
            onChangeText={handleChange('passwordConfirm')}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <View style={styles.item}>
        <Button title="Register" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default NativeBase;

const styles = StyleSheet.create({});
