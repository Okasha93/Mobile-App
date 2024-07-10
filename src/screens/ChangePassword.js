import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


function ChangePassword() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const handleCancel = () => navigation.navigate('My Profile');
  const onSubmit = () => navigation.navigate('My Profile');


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>

        <Text style={styles.label}>Current Password</Text>
        <Controller
          control={control}
          name="currentPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Current Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>New Password</Text>
        <Controller
          control={control}
          name="newPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

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

        <View style={styles.buttons}>
          <View style={styles.saveButton}>
            <Button title="Save" onPress={handleSubmit(onSubmit)} color='green' />
          </View>
          <View style={styles.cancelButton}>
            <Button title="Cancel" onPress={handleCancel} color='red' />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 50,
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
  datePickerButton: {
    height: 45,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  datePickerText: {
    color: 'gray',
  },
  accText: {
    marginTop: 10,
    color: 'black',
    paddingRight: 10,
  },
  centeredContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  changeContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 70,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  saveButton: {
    flex: 1,
    marginRight: 25,
  },
  cancelButton: {
    flex: 1,
  },
});

export default ChangePassword;
