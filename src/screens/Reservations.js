import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const Reservations = () => {
  const reservations = [
    { id: '0055027', date: '17/12/2024' },
    { id: '0055028', date: '17/12/2024' },
    { id: '0055029', date: '17/12/2024' },
    { id: '0055040', date: '17/12/2024' },
    { id: '0055025', date: '17/12/2024' },
  ];

  const ReservationItem = ({ reservation }) => {
    return (
      <View style={styles.reservationContainer}>
        <Text style={styles.reservationId}>{reservation.id}</Text>
        <Text style={styles.reservationText}>Protected Area</Text>
        <Text style={styles.reservationText}>Site Name</Text>
        <Text style={styles.reservationText}>Date: {reservation.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      {/* <Text style={styles.header}>Reservations</Text> */}
      <FlatList
        data={reservations}
        renderItem={({ item }) => <ReservationItem reservation={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // backgroundColor: '#000',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  reservationContainer: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  reservationId: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reservationText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Reservations;
