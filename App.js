import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './Screen/Login/Login';
import { Register } from './Screen/Register/Register';
import { HomePage } from './Screen/Home/HomePage';
import { Todo } from './Screen/Todo/Todo';
const Stack = createNativeStackNavigator();
export default function App() {
     return (
          <NavigationContainer>
               <Stack.Navigator
               // initialRouteName='Home'
               >
                    <Stack.Screen
                         name='Login'
                         component={Login}
                         options={{ headerShown: false }}
                    />
                    <Stack.Screen
                         name='Home'
                         component={HomePage}
                         options={{
                              headerRight: function () {
                                   const route = useRoute();
                                   const username =
                                        route.params?.user?.username ||
                                        'default';
                                   return <Text> {username} </Text>;
                              },
                              headerTitle: '',
                         }}
                    />
                    <Stack.Screen
                         name='Todo'
                         component={Todo}
                         options={{
                              headerRight: function () {
                                   const route = useRoute();
                                   const username =
                                        route.params?.user?.username ||
                                        'default';
                                   return <Text> {username} </Text>;
                              },
                              headerTitle: '',
                         }}
                    />
                    <Stack.Screen name='Register' component={Register} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}
