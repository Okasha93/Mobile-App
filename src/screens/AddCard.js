import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


function AddCard() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const handleCancel = () => navigation.navigate('My Cards');
  const onSubmit = () => navigation.navigate('My Cards');


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Add a Card</Text>

        <Text style={styles.label}>Card Number</Text>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              // placeholder="Current Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Name on the Card</Text>
        <Controller
          control={control}
          name="cardName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              // placeholder="New Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <View style={styles.inputContainer}>
          <View style={styles.containerOne}>
            <Text style={styles.label}>Expiration Date</Text>
            <Controller
              control={control}
              name="expirationDate"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  // placeholder="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.containerTwo}>
            <Text style={styles.label}>CVV</Text>
            <Controller
              control={control}
              name="CVV"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  // placeholder="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
        </View>


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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingTop: 70,
    marginVertical: 10,
    // marginHorizontal: 25,
  },
  containerOne: {
    flex: 2,
    marginRight: 25,
  },
  containerTwo: {
    flex: 1,
  },
});

export default AddCard;
