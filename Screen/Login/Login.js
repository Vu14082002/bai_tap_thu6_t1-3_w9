import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     Image,
     TextInput,
} from 'react-native';
import { styles } from './LoginStyle';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const Login = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const [usetName, settUserName] = useState('');
     const [passwrod, setPassWord] = useState('');
     const { key, key2 } = route.params || {};

     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[{ flex: 1 }]}> </View>
               <View
                    style={[{ justifyContent: 'center', alignItems: 'center' }]}
               >
                    <View style={[styles.form]}>
                         <View style={[styles.textInputGroup]}>
                              <Ionicons
                                   name='people-circle'
                                   color={'#0000'}
                                   size={24}
                                   style={{
                                        position: 'absolute',
                                        left: 20,
                                   }}
                              />
                              <TextInput
                                   placeholder='Enter your Email'
                                   style={styles.textInput}
                                   value={null}
                                   onChangeText={(inputText) =>
                                        settUserName(inputText)
                                   }
                              />
                         </View>
                    </View>
                    <View style={[styles.form]}>
                         <View style={[styles.textInputGroup]}>
                              <TextInput
                                   placeholder='password'
                                   style={styles.textInput}
                                   value={null}
                                   onChangeText={(inputText) =>
                                        setText(inputText)
                                   }
                                   secureTextEntry={true}
                              />
                         </View>
                    </View>

                    <TouchableOpacity
                         style={{
                              width: '100%',
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#F1B000',
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}
                         onPress={() => {
                              navigation.navigate('LayoutName', {
                                   ...route.params,
                                   key: 'Value',
                              });
                         }}
                    >
                         <Text
                              style={{
                                   color: '#FFFDFD',
                                   fontSize: 25,
                                   fontWeight: 'bold',
                              }}
                         >
                              Login
                         </Text>
                    </TouchableOpacity>
               </View>
               <View
                    style={[
                         {
                              justifyContent: 'center',
                              alignItems: 'center',
                              flex: 1,
                         },
                    ]}
               >
                    {/*------------BUTTON STYLE START---------------- */}
                    <TouchableOpacity
                         style={{
                              width: '100%',
                              height: 60,
                              borderRadius: 5,
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}
                         onPress={() => {
                              navigation.navigate('Register');
                         }}
                    >
                         <Text
                              style={{
                                   color: '#000',
                                   fontSize: 25,
                                   fontWeight: 'bold',
                              }}
                         >
                              Register
                         </Text>
                    </TouchableOpacity>
                    {/*-------------- BUTTON STYLE END-------------*/}
               </View>
          </SafeAreaView>
     );
};
