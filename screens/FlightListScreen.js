import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlightListScreen = ({ route }) => {
  const { origin, destination, date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Results</Text>
      <View style={styles.flightItem}>
        <Text>Pemberangkatan: {origin}</Text>
        <Text>Menuju: {destination}</Text>
        <Text>Tanggal: {date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  flightItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
});

export default FlightListScreen;
``
