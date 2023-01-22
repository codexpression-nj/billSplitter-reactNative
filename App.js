import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewBill from './components/NewBill';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
    <Stack.Navigator styles={{backgroundColor:"white"}}>
      <Stack.Screen name="NewBill" component={NewBill} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    margin:16
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
