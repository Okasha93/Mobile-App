import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

function Profile() {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleCancel = () => navigation.navigate('Home');
  const onSubmit = () => navigation.navigate('My Profile');

  const showDatePicker = () => {
    setShow(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setValue('dob', currentDate); // Update form value
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ahmed Mohamed"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>{date.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        <Text style={styles.label}>Phone Number</Text>
        <Controller
          control={control}
          name="PhoneNumber"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="01115236584"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <TouchableOpacity style={styles.changeContainer} onPress={() => navigation.navigate('Change Password')}>
          <Text style={styles.accText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.centeredContainer} onPress={() => navigation.navigate('My Cards')}>
          <Text style={styles.accText}>My Cards</Text>
        </TouchableOpacity>

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
    paddingTop: 30,
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

export default Profile;
