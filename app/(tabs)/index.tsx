import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// Pantallas
import Destinations from '../screen/Destinations';
import EditDestinations from '../screen/EditDestinations';

//Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Destinations">
        {/* Pantalla principal con los destinos */}
        <Stack.Screen
          name="Destinations"
          component={Destinations}
          options={{ headerShown: false }}
        />

        {/* Editar destino */}
        <Stack.Screen
          name="EditDestinations"
          component={EditDestinations}
          options={{ title: 'Editar destino' }}
        />

      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default App;