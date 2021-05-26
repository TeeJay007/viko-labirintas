import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Lenteles from './pages/lenteles';
import ProLanga from './pages/prolanga';
import ScrambleFinansai from './pages/ScrambleFinansai';
import Finansai from './pages/finansai';
import Balloons from './pages/Balloons';
import Vikobankasdrauda from './pages/vikobankasdrauda';

//Navigacija po pastata
import First from './pages/navigation_pages/first'
import Second from './pages/navigation_pages/second'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Balloons/>
    
    // <NavigationContainer>
    //   {/* TODO: kur initialRouteName turetu but pradinis programos route name */}
    //   <Stack.Navigator initialRouteName="first">
    //     {/* <Stack.Screen
    //       name="lenteles"
    //       component={Lenteles}
    //       options={{ title: 'Lentelės' }} /> */}

    //     {/* Navigacija po pastata */}
    //     <Stack.Screen
    //       name="first"
    //       component={First}
    //       options={{ title: 'Pirmas' , headerShown: false, cardStyleInterpolator: forFade}} />
    //     <Stack.Screen
    //       name="second"
    //       component={Second}
    //       options={{ title: 'Antras' , headerShown: false, cardStyleInterpolator: forFade}} />

    //     <Stack.Screen
    //       name="proLanga"
    //       component={ProLanga}
    //       options={{ title: 'Pro langą' }} />
    //     <Stack.Screen
    //       name="scrambleFinansai"
    //       component={ScrambleFinansai}
    //       options={{ title: 'Finansai' }} />
    //     <Stack.Screen
    //       name="vikoBankasDrauda"
    //       component={Vikobankasdrauda}
    //       options={{ title: 'Viko bankas drauda' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});