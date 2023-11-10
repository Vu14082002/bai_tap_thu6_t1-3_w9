import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
} from 'react-native';
import { styles } from './RegisterStyle';

export const Register = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { key, key2 } = route.params || {};
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.form]}>
                    <View style={[styles.textInputGroup]}>
                         <TextInput
                              placeholder='Enter your username'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) => setText(inputText)}
                              secureTextEntry={true}
                         />
                    </View>
               </View>
               <View style={[styles.form]}>
                    <View style={[styles.textInputGroup]}>
                         <TextInput
                              placeholder='Enter your password'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) => setText(inputText)}
                              secureTextEntry={true}
                         />
                    </View>
               </View>
               <View style={[styles.form]}>
                    <View style={[styles.textInputGroup]}>
                         <TextInput
                              placeholder='Conform your Password'
                              style={styles.textInput}
                              value={null}
                              onChangeText={(inputText) => setText(inputText)}
                              secureTextEntry={true}
                         />
                    </View>
               </View>{' '}
               {/*------------BUTTON STYLE START---------------- */}
               {/* <View style={[{ width: '100%', alignItems: 'center' }]}> */}
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
                         Register
                    </Text>
               </TouchableOpacity>{' '}
               {/* </View> */}
               {/*-------------- BUTTON STYLE END-------------*/}
          </SafeAreaView>
     );
};
