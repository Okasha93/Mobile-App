import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

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

function SitesScreen({ route }) {

  const { id } = route.params;
  const [likedItems, setLikedItems] = useState({});
  const [expandedItems, setExpandedItems] = useState({});
  const navigation = useNavigation();

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  const toggleExpand = (id) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !prevExpandedItems[id],
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
      <TouchableOpacity style={styles.site} onPress={() => navigation.navigate('SiteDetails', { item })}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
      {/* <View style={styles.locationContainer}>
        <Icon name='location-on' type='material' color='#fff' size={16} />
        <Text style={styles.location}>{item.location}</Text>
      </View> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Protected Area Name</Text>
      <TouchableOpacity onPress={() => toggleExpand(id)}>
      <Text style={styles.details}
        numberOfLines={expandedItems[id] ? undefined : 2}
        ellipsizeMode='tail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </TouchableOpacity>
      
      <View style={styles.locationContainer}>
        <Icon name='location-on' type='material' color='#0070c4' size={25} />
        <Text style={styles.location}>Cairo</Text>
      </View>
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
  name: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  locationContainer: {
    // marginTop: 10,
    marginBottom: 10,
    marginLeft: 270,
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
});

export default SitesScreen;
