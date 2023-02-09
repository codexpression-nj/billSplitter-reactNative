import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewBill from './components/NewBill';
import SignUp from './components/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container} >
    <Stack.Navigator styles={{backgroundColor:'white'}} initialRouteName="signup">
      <Stack.Screen name="NewBill" component={NewBill} options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
