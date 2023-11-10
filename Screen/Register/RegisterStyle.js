import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     form: {
          flexDirection: 'row',
          alignItems: 'center',
          width: '70%',
          paddingVertical: 15,
          alignSelf: 'center',
     },
     textInputGroup: {
          width: '100%',
          justifyContent: 'center',
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
