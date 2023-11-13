import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     FlatList,
} from 'react-native';
import { styles } from './HomeStyle';
import { TextInput } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { puttData } from '../Todo/Todo';
import { useEffect, useState } from 'react';

export const HomePage = function () {
     const navigation = useNavigation();
     const route = useRoute();
     console.log(route);
     const [data, setData] = useState(route.params?.user?.todo || []);
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.top]}>
                    <View style={[styles.form]}>
                         <View style={[styles.textInputGroup]}>
                              <Ionicons
                                   name='search'
                                   color={'#000'}
                                   size={24}
                                   style={{
                                        position: 'absolute',
                                        alignSelf: 'center',
                                        left: 12,
                                   }}
                              />
                              <TextInput
                                   placeholder='Enter your Email'
                                   style={styles.textInput}
                                   value={null}
                                   onChangeText={(inputText) =>
                                        setText(inputText)
                                   }
                              />
                         </View>
                    </View>
               </View>
               <View style={[styles.body]}>
                    <FlatList
                         data={data}
                         numColumns={1}
                         style={[{ width: '90%', alignSelf: 'center' }]}
                         horizontal={false}
                         keyExtractor={(item) => item.key}
                         renderItem={({ item }) => (
                              <Item item={item} setData={setData} />
                         )}
                    />
               </View>
               <View style={[styles.bottom]}>
                    <TouchableOpacity
                         style={{
                              width: '50%',
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#F1B000',
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                         }}
                         onPress={() => {
                              navigation.navigate('Todo', {
                                   ...route.params,
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
                              Add to do
                         </Text>
                    </TouchableOpacity>{' '}
               </View>
          </SafeAreaView>
     );
};
export var Item = function ({ item, setData }) {
     const navigation = useNavigation();
     const route = useRoute();
     const { user } = route.params;
     return (
          <TouchableOpacity>
               <View style={[styles.itemLeft]}>
                    <View style={[{ flexDirection: 'row' }]}>
                         <Ionicons
                              name='pencil'
                              color={'red'}
                              size={24}
                              style={[{ marginLeft: 15 }]}
                         />
                         <Text> {item} </Text>
                    </View>
               </View>
               <TouchableOpacity
                    onPress={() => {
                         const newTodo = user.todo.filter((value) => {
                              if (value !== item) {
                                   return value;
                              }
                         });
                         console.log(newTodo);
                         setData(newTodo);
                         user.todo = newTodo;
                         console.log(user);
                         puttData(user);
                    }}
               >
                    <View style={[styles.itemRight]}>
                         <Ionicons name='remove' color={'red'} size={24} />
                    </View>
               </TouchableOpacity>
          </TouchableOpacity>
     );
};
