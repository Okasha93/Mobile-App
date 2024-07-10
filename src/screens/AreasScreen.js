import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import SitesScreen from './SitesScreen';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', name: 'Protected Area Name', location: 'Cairo' },
  { id: '2', name: 'Protected Area Name', location: 'Cairo' },
  { id: '3', name: 'Protected Area Name', location: 'Cairo' },
  { id: '4', name: 'Protected Area Name', location: 'Cairo' },
  { id: '5', name: 'Protected Area Name', location: 'Cairo' },
  { id: '6', name: 'Protected Area Name', location: 'Cairo' },
  { id: '7', name: 'Protected Area Name', location: 'Cairo' },
  { id: '8', name: 'Protected Area Name', location: 'Cairo' },
  { id: '9', name: 'Protected Area Name', location: 'Cairo' },
  { id: '10', name: 'Protected Area Name', location: 'Cairo' },
  { id: '11', name: 'Protected Area Name', location: 'Cairo' },
  { id: '12', name: 'Protected Area Name', location: 'Cairo' },
];

function AreasScreen() {

  const [likedItems, setLikedItems] = useState({});
  const navigation = useNavigation();

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <TouchableOpacity style={styles.icon} onPress={() => toggleLike(item.id)}>
        <Icon
          name={likedItems[item.id] ? 'heart' : 'heart-outline'}
          type='material-community'
          color={likedItems[item.id] ? 'red' : '#fff'}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.site} onPress={() => navigation.navigate('Sites', { item })}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name='location-on' type='material' color='#fff' size={16} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Protected Areas</Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
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
  site: {
    textAlign: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#fff',
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
    fontWeight: 'bold',
  },
});

export default AreasScreen;
