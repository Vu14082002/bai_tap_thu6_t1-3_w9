import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          color: '#fff',
     },
     form: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          width: '80%',
     },
     textInputGroup: {
          width: '100%',
          justifyContent: 'center',
          marginBottom: 20,
     },
     textInput: {
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
