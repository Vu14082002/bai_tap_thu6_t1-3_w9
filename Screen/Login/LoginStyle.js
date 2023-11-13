import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     logo: {
          flex: 1,
     },
     form: {
          flex: 2,
          alignItems: 'center',
          alignSelf: 'center',
          width: '90%',
          rowGap: 30,
     },
     textInputGroup: {
          flexDirection: 'row',
          width: '100%',
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
