import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
} from 'react-native';
import { styles } from './RegisterStyle';
import { useState } from 'react';

export const Register = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { key, key2 } = route.params || {};
     const [username, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const addUser = async function () {
          const user = {
               username: username,
               password: password,
               todo: [],
          };
          console.log('json server');
          console.log(user);
          const resp = await fetch('http://localhost:3000/api/user', {
               method: 'POST',
               body: JSON.stringify(user),
               headers: {
                    'content-type': 'application/json',
               },
          });
          console.log(await resp.json());
     };
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.form]}>
                    <View style={[styles.textInputGroup]}>
                         <TextInput
                              placeholder='Enter your Username'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) =>
                                   setUserName(inputText)
                              }
                         />
                    </View>
                    <View style={[styles.textInputGroup]}>
                         <TextInput
                              placeholder='Enter your password'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) =>
                                   setPassword(inputText)
                              }
                              secureTextEntry={true}
                         />
                    </View>
                    <TouchableOpacity
                         style={{
                              width: '50%',
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#17a2b8',
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                         }}
                         onPress={() => {
                              addUser();
                              navigation.navigate('Login', {
                                   ...route.params,
                              });
                         }}
                    >
                         <Text
                              style={{
                                   color: '#fff',
                                   fontSize: 25,
                                   fontWeight: 'bold',
                              }}
                         >
                              Register
                         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{
                              width: '50%',
                              height: 60,
                              borderRadius: 5,
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                         }}
                         onPress={() => {
                              navigation.goBack();
                         }}
                    >
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: 400,
                              }}
                         >
                              Go back
                         </Text>
                    </TouchableOpacity>
               </View>
          </SafeAreaView>
     );
};
