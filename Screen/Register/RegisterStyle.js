import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     form: {
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'center',
     },
     textInputGroup: {
          flexDirection: 'row',
          width: '90%',
          marginBottom: 30,
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
});
