import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ScreenIndex({navigation}) {
  return (
    <View style={styles.container}>
        <Image style ={{width:'100%', height:600}} source="https://thumbs.files.fm/thumb_show.php?i=n3j2259vf&view"></Image>
        <TouchableOpacity onPress={() => {navigation.navigate('ScreenHome')}} style={{marginTop:20,width:350,height:60,borderRadius:20,borderColor:'white',borderWidth:1,color:'white',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <Icon style={{marginRight:10}} name="facebook" size={30} color="blue" />
            <Text style={{color:'white'}}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenHome')} style={{marginTop:30,width:350,height:60,borderRadius:20,borderColor:'white',borderWidth:1,color:'white',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <Icon style={{marginRight:10}} name="google" size={30} color="red" />
            <Text  style={{color:'white'}}>SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>
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
