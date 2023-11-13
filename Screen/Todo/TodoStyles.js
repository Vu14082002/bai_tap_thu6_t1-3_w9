import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     top: {
          flex: 1,
     },
     welcome: {
          color: '#17a2b8',
          fontSize: 23,
          fontWeight: 700,
     },
     body: {
          flex: 3,
     },
     bottom: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
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
          // khong thay doi with
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
});
