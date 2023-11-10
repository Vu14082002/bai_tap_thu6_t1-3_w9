import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './Screen/Login/Login';
import { Register } from './Screen/Register/Register';
const Stack = createNativeStackNavigator();
export default function App() {
     return (
          <NavigationContainer>
               <Stack.Navigator>
                    {/* <Stack.Screen name='Login' component={Login} /> */}
                    <Stack.Screen name='Register' component={Register} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}
