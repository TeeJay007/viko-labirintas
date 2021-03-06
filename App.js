import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lenteles from './pages/lenteles';
import ProLanga from './pages/prolanga';
import ScrambleFinansai from './pages/ScrambleFinansai';
import Finansai from './pages/finansai';
import Balloons from './pages/Balloons';
import Vikobankasdrauda from './pages/vikobankasdrauda';
import Kryziazodis from './pages/Kryžiažodis'
import Viktorina from './pages/Viktorina'
import ViktorinaDrauda from './pages/Viktorina_Drauda'
import ViktorinaBankas from './pages/Viktorina_Bankas'
//Navigacija po pastata
import Laukas from './pages/navigation_pages/laukas'
import TreciasVestibiulis from './pages/navigation_pages/treciasvestibiulis'
import KetvirtasVestibiulis from './pages/navigation_pages/ketvirtas_vestibiulis';
import KetvirtasVestibiulisF from './pages/navigation_pages/ketvirtas_vestibiulis_f';
import PenktasVestibiulis from './pages/navigation_pages/penktas_vestibiulis';
import PenkiDuDu from './pages/navigation_pages/penkidudu';
import PenkiDuDuVidus from './pages/navigation_pages/penkidudu_vidus';
import KeturiDuVienas from './pages/navigation_pages/keturiduvienas';
import Kompiuteriai from './pages/navigation_pages/kompiuteriai';
import SAIejimas from './pages/navigation_pages/sa_iejimas';
import SAVidus from './pages/navigation_pages/sa_vidus';
import VikoBankasIejimas from './pages/navigation_pages/vikobankas_iejimas';
import VikoBankas from './pages/navigation_pages/vikobankas';
import PaskutinioKahootIejimasVB from './pages/navigation_pages/paskutiniokahootiejimasvb';
import PenkiPenkiolika from './pages/navigation_pages/penkipenkiolika';
import DekanoIejimas from './pages/navigation_pages/dekanoiejimas';
import PenkiDuKeturi from './pages/navigation_pages/penkiduketuri';
import FinansaiKab from './pages/navigation_pages/finansaikab';
import Dekanas from './pages/navigation_pages/dekanas';
import KryziazodisKab from './pages/navigation_pages/kryziazodiskab';
import VikoDrauda from './pages/navigation_pages/vikodrauda';
import VikoDraudaIejimas from './pages/navigation_pages/vikodraudaiejimas';
import Pabaiga from './pages/navigation_pages/pabaiga'
const Stack = createStackNavigator();

export default function App() {
  return (    
    
    <NavigationContainer>
      {/* TODO: kur initialRouteName turetu but pradinis programos route name */}
      <Stack.Navigator initialRouteName="laukas">
        {/* Navigacija po pastata */}
        <Stack.Screen
          name="laukas"
          component={Laukas}
          options={{ title: 'Lauko įėjimas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="treciasVestibiulis"
          component={TreciasVestibiulis}
          options={{ title: 'Ketvirtas aukštas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="ketvirtasVestibiulis"
          component={KetvirtasVestibiulis}
          options={{ title: 'Ketvirtas aukštas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="ketvirtasVestibiulisF"
          component={KetvirtasVestibiulisF}
          options={{ title: 'Ketvirtas aukštas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="penktasVestibiulis"
          component={PenktasVestibiulis}
          options={{ title: 'Penktas aukštas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="penkiDuDu"
          component={PenkiDuDu}
          options={{ title: '522 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="penkiDuDuVidus"
          component={PenkiDuDuVidus}
          options={{ title: '522 kabineto vidus' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="keturiDuVienas"
          component={KeturiDuVienas}
          options={{ title: '421 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="kompiuteriai"
          component={Kompiuteriai}
          options={{ title: 'Kompiuteriai' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="saiejimas"
          component={SAIejimas}
          options={{ title: 'SA įėjimas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="savidus"
          component={SAVidus}
          options={{ title: 'Studentų atstovybė' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="vikobankasiejimas"
          component={VikoBankasIejimas}
          options={{ title: 'Viko banko įėjimas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="vikobankas"
          component={VikoBankas}
          options={{ title: 'Viko bankas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="paskutiniokahootiejimasvb"
          component={PaskutinioKahootIejimasVB}
          options={{ title: 'Paskutinis kahoot' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="penkipenkiolika"
          component={PenkiPenkiolika}
          options={{ title: '515 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="dekanoiejimas"
          component={DekanoIejimas}
          options={{ title: '515, 517, 518 kabinetai' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="penkiduketuri"
          component={PenkiDuKeturi}
          options={{ title: '524 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="finansaikab"
          component={FinansaiKab}
          options={{ title: 'Finansų kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="dekanas"
          component={Dekanas}
          options={{ title: 'Dekano kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="kryziazodiskab"
          component={KryziazodisKab}
          options={{ title: '524 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="vikodrauda"
          component={VikoDrauda}
          options={{ title: '524 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
        <Stack.Screen
          name="vikodraudaiejimas"
          component={VikoDraudaIejimas}
          options={{ title: '524 kabinetas' , headerShown: false, cardStyleInterpolator: forFade}} />
          <Stack.Screen
          name="pabaiga"
          component={Pabaiga}
          options={{ title: 'Laimėjimas' , headerShown: false, cardStyleInterpolator: forFade}} />

        <Stack.Screen
          name="baloons"
          component={Balloons}
          options={{title: 'Balionai', headerShown: false}} />
        <Stack.Screen
          name="proLanga"
          component={ProLanga}
          options={{ title: 'Pro langą', headerShown: false }} />
        <Stack.Screen
          name="scrambleFinansai"
          component={Finansai}
          options={{ title: 'Finansai', headerShown: false }} />
        {/* <Stack.Screen
          name="finansai"
          component={Finansai}
          options={{ title: 'Finansai', headerShown: false }} /> */}
           <Stack.Screen
          name="kryziazodis"
          component={Kryziazodis}
          options={{ title: 'Kryziazodis', headerShown: false }} />
        <Stack.Screen
          name="vikoBankasDrauda"
          component={Vikobankasdrauda}
          options={{ title: 'Viko bankas drauda', headerShown: false }} />
        <Stack.Screen
          name="lenteles"
          component={Lenteles}
          options={{ title: 'Lentelės',headerShown: false }} />
          <Stack.Screen
          name="viktorina"
          component={Viktorina}
          options={{ title: 'Viktorina', headerShown: false }} />
          <Stack.Screen
          name="viktorinaBankas"
          component={ViktorinaBankas}
          options={{ title: 'Viktorina', headerShown: false }} />
          <Stack.Screen
          name="viktorinaDrauda"
          component={ViktorinaDrauda}
          options={{ title: 'Viktorina', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});