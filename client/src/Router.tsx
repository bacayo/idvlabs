import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types/nav.types';
import DetailScreen from './screens/DetailScreen';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
