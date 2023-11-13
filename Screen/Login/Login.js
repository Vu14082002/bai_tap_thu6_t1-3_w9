import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
     Image,
} from 'react-native';
import { styles } from './LoginStyle';
import { useEffect, useState } from 'react';

export const Login = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { key, key2 } = route.params || {};
     const [username, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const [users, setUsers] = useState([]);
     useEffect(function () {
          fetch('http://localhost:3000/api/user')
               .then((respone) => respone.json())
               .then((data) => setUsers(data));
     }, users);
     console.log('Username -->', username);
     console.log('Password-->', password);
     console.log('list user-->', users);
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.logo]}></View>
               <View style={[styles.form]}>
                    <View style={[styles.textInputGroup]}>
                         <Image
                              source={require('../../assets/img/account.png')}
                              style={{
                                   width: 24,
                                   height: 20,
                                   position: 'absolute',
                                   alignSelf: 'center',
                                   left: 12,
                              }}
                              resizeMode='contain'
                         />
                         <TextInput
                              placeholder='Username'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) =>
                                   setUserName(inputText)
                              }
                         />
                    </View>
                    <View style={[styles.textInputGroup]}>
                         <Image
                              source={require('../../assets/img/password.png')}
                              style={{
                                   width: 24,
                                   height: 20,
                                   position: 'absolute',
                                   alignSelf: 'center',
                                   left: 12,
                              }}
                              resizeMode='contain'
                         />
                         <TextInput
                              placeholder='Password'
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
                              console.log(username);
                              console.log(password);
                              console.log(users);
                              const checkUser = users.find((value) => {
                                   if (
                                        value.username == username &&
                                        value.password == password
                                   ) {
                                        return value;
                                   }
                              });
                              console.log(checkUser);
                              if (checkUser) {
                                   navigation.navigate('Home', {
                                        ...route.params,
                                        user: checkUser,
                                   });
                              }
                         }}
                    >
                         <View>
                              <Text
                                   style={{
                                        color: '#FFFDFD',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                   }}
                              >
                                   LOGIN
                              </Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={() => {
                              navigation.navigate('Register', {
                                   ...route.params,
                                   username: username,
                              });
                         }}
                    >
                         <Text
                              style={{
                                   color: '#000',
                                   fontSize: 16,
                                   fontWeight: 500,
                              }}
                         >
                              Register
                         </Text>
                    </TouchableOpacity>
               </View>
               <View style={[{ flex: 1 }]}> </View>
          </SafeAreaView>
     );
};
