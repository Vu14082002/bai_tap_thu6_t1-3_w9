import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
     },
     top: {
          flex: 1,
     },
     body: {
          flex: 3,
     },
     bottom: {
          flex: 2,
          justifyContent: 'center',
          alignContent: 'center',
     },
     // form input
     form: {
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
     },
     textInputGroup: {
          flexDirection: 'row',
          width: '80%',
     },
     textInput: {
          width: '100%',
          height: 60,
          borderRadius: 5,
          borderWidth: 1,
          paddingLeft: 50,
          paddingRight: 20,
          fontSize: 20,
          placeholderTextColor: 'gray',
          fontWeight: 500,
     },
     // item
     itemGroup: {
          height: 60,
          borderRadius: 10,
          marginVertical: 10,
          flexDirection: 'row',
          //   justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dadce0',
     },
     itemLeft: {
          flex: 8,
     },
     itemRight: {
          flex: 4,
          alignItems: 'flex-end',
          paddingRight: 15,
     },
});
