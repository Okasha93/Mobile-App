import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Button, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', name: 'Site Name', location: 'Cairo' },
  { id: '2', name: 'Site Name', location: 'Cairo' },
  { id: '3', name: 'Site Name', location: 'Cairo' },
  { id: '4', name: 'Site Name', location: 'Cairo' },
  { id: '5', name: 'Site Name', location: 'Cairo' },
  { id: '6', name: 'Site Name', location: 'Cairo' },
  { id: '7', name: 'Site Name', location: 'Cairo' },
  { id: '8', name: 'Site Name', location: 'Cairo' },
  { id: '9', name: 'Site Name', location: 'Cairo' },
  { id: '10', name: 'Site Name', location: 'Cairo' },
  { id: '11', name: 'Site Name', location: 'Cairo' },
  { id: '12', name: 'Site Name', location: 'Cairo' },
];

function SiteDetailScreen({ route }) {

  const { id } = route.params;
  const [expandedItems, setExpandedItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const toggleExpand = (id) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !prevExpandedItems[id],
    }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  const handleImagePress = (item) => {
    setSelectedImage('https://via.placeholder.com/150'); // Update this with the correct image [item.image]
    setModalVisible(true);
  };

  const handleBookingPress = () => {
    navigation.navigate('BookingPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Site Name Details</Text>
      <TouchableOpacity onPress={() => toggleExpand(id)}>
        <Text style={styles.details}
          numberOfLines={expandedItems[id] ? undefined : 2}
          ellipsizeMode='tail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <Text style={styles.location}>Ptoected Area Name</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Icon name="snow" size={25} color="#0070c4" />
        <Icon name="cafe" size={25} color="#0070c4" />
        <Icon name="bulb" size={25} color="#0070c4" />
        <Icon name="time" size={25} color="#0070c4" />
      </View>

      <View style={{ margin: 15, paddingRight: 30, paddingLeft: 30 }}>
        <Button title="Book Now" onPress={handleBookingPress} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: "15%",
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    marginBottom: 15,
    width: (width / 2) - 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  name: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  locationContainer: {
    // marginTop: 10,
    marginBottom: 10,
    marginLeft: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#0070c4',
    fontSize: 20,
    marginLeft: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#222',
    padding: 15,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 10,
    // fontWeight: 'bold',
  },
  details: {
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginVertical: 3,
    marginLeft: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SiteDetailScreen;
