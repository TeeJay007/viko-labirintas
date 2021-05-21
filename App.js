import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Lenteles from './pages/lenteles';
import ProLanga from './pages/prolanga';
import ScrambleFinansai from './pages/ScrambleFinansai';
import Vikobankasdrauda from './pages/vikobankasdrauda';
import Panorama from './pages/panorama';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* TODO: kur initialRouteName turetu but pradinis programos route name */}
      <Stack.Navigator initialRouteName="panorama">
        {/* <Stack.Screen
          name="lenteles"
          component={Lenteles}
          options={{ title: 'Lentelės' }} /> */}
        <Stack.Screen
          name="panorama"
          component={Panorama}
          options={{ title: 'Panorama' , headerShown: false}} />
        <Stack.Screen
          name="proLanga"
          component={ProLanga}
          options={{ title: 'Pro langą' }} />
        <Stack.Screen
          name="scrambleFinansai"
          component={ScrambleFinansai}
          options={{ title: 'Finansai' }} />
        <Stack.Screen
          name="vikoBankasDrauda"
          component={Vikobankasdrauda}
          options={{ title: 'Viko bankas drauda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}