import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ScreenHome({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'flex-end',padding:10,width:'100%',height:70,backgroundColor:'#F7B9AC'}}>
          <Icon style={{marginRight:10}} name="menu" size={30} color="black" />
          <View style={{flexDirection:'row'}}>
            <Icon name='location' size={30} color="black"/>
            <Text style={{fontWeight:'bold'}}>Duyen Hai,Tra Vinh {'\n'} Viet Nam</Text>
          </View>
          <Icon name='chatbox-outline' size={30}/>
          <Icon name='notifications-outline' size={30}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141416',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
