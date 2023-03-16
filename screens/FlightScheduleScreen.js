import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FlightSearch = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');


  const handleSearch = () => {
    // melakukan pencarian jadwal pesawat berdasarkan input yang diberikan
    // kemudian navigasi ke layar FlightListScreen dengan parameter data jadwal pesawat
    navigation.navigate('FlightList', { origin, destination, date });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Origin"
        onChangeText={setOrigin}
        value={origin}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        onChangeText={setDestination}
        value={destination}
      />

      <TextInput
        style={styles.input}
        placeholder="Date"
        onChangeText={setDate}
        value={date}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search Flights</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default FlightSearch;
