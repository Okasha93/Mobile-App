import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { generateCaptcha } from '../utils/generateCaptcha';
import Icon from 'react-native-vector-icons/MaterialIcons';

const schema = yup.object().shape({
  companyName: yup.string().required('Company Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  captcha: yup.string().required('Captcha is required'),
});

function SignUpScreen({ navigation }) {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    if (data.captcha !== captcha) {
      alert('Captcha does not match');
      setCaptcha(generateCaptcha());
      return;
    }
    console.log(data);
    navigation.navigate('Home');
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <Text style={styles.label}>Company Name</Text>
        <Controller
          control={control}
          name="companyName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.companyName && <Text style={styles.error}>{errors.companyName.message}</Text>}

        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

        <Text style={styles.label}>Enter Captcha</Text>
        <View style={styles.captchaContainer}>
          <Text style={styles.captcha}>{captcha}</Text>
          <TouchableOpacity onPress={refreshCaptcha}>
            <Icon name="refresh" size={24} color="#0070c4" />
          </TouchableOpacity>
        </View>
        <Controller
          control={control}
          name="captcha"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Captcha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.captcha && <Text style={styles.error}>{errors.captcha.message}</Text>}
        <View style={{ paddingTop: 20 }}>
          <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    paddingBottom: 50,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    marginBottom: 50,
    marginTop: 50,
    textAlign: 'center',
    color: "#0070c4",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  captchaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  captcha: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 12,
    marginRight: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 60,
    width: 200,
    letterSpacing: 10,
    color: "#0070c4",
  },
});

export default SignUpScreen;
