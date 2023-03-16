// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlightSearch from './screens/FlightScheduleScreen';
import FlightResults from './screens/FlightListScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlightSchedule"
          component={FlightSearch}
          options={{ title: 'Pencarian Jadwal Pesawat' }}
        />
        <Stack.Screen
          name="FlightList"
          component={FlightResults}
          options={{ title: 'Daftar Jadwal Pesawat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

