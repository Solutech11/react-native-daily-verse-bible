import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash2 from './pages/splas2';
import NoInternet from './pages/noInternet';
import Verse from './pages/Verse';
import {SafeAreaProvider} from 'react-native-safe-area-context';


const Stack =createNativeStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaProvider>

    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' component={Splash2} options={{headerShown:false}} />
          <Stack.Screen name='Network' component={NoInternet} options={{headerShown:false}} />
          <Stack.Screen name='Verse' component={Verse} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
