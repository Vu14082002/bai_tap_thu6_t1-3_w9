import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
} from 'react-native';
import { styles } from './TodoStyles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const puttData = function (user) {
     console.log(user);
     fetch('http://localhost:3000/api/user/' + user.id, {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: {
               'content-type': 'application/json',
          },
     });
};
export const postData = function (user) {
     fetch('http://localhost:3000/api/user', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
               'content-type': 'application/json',
          },
     });
};
export const Todo = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { user } = route.params || {};
     console.log('TODO-->', user);
     const [toDoInput, setTodoInput] = useState('');

     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.top]}>
                    <Text style={[styles.welcome]}>
                         WELCOME {user.username}
                    </Text>
               </View>
               <View style={[styles.body]}>
                    <View style={[styles.form]}>
                         <View style={[styles.textInputGroup]}>
                              <Ionicons
                                   name='book'
                                   color={'red'}
                                   size={24}
                                   style={{
                                        position: 'absolute',
                                        alignSelf: 'center',
                                        left: 12,
                                   }}
                              />
                              <TextInput
                                   placeholder='Input To do'
                                   style={styles.textInput}
                                   value={null}
                                   onChangeText={(inputText) =>
                                        setTodoInput(inputText)
                                   }
                              />
                         </View>
                    </View>
               </View>
               <View style={[styles.bottom]}>
                    <TouchableOpacity
                         style={{
                              width: '75%',
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#F1B000',
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                         }}
                         onPress={() => {
                              user.todo.push(toDoInput);
                              puttData(user);
                              navigation.goBack();
                         }}
                    >
                         <Text
                              style={{
                                   color: '#FFFDFD',
                                   fontSize: 25,
                                   fontWeight: 'bold',
                              }}
                         >
                              ADD TODO
                         </Text>
                    </TouchableOpacity>
               </View>
          </SafeAreaView>
     );
};
