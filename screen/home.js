import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import listData from '../data/store';

export default function ScreenHome({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'flex-end',padding:10,width:'100%',height:70,backgroundColor:'#F7B9AC'}}>
          <Icon style={{marginRight:10}} name="menu" size={50} color="black" />
          <View style={{flexDirection:'row'}}>
            <Icon name='location' size={40} color="black"/>
            <Text style={{fontWeight:'bold'}}>Duyen Hai,Tra Vinh {'\n'} Viet Nam</Text>
          </View>
          <Icon name='chatbox-outline' size={40}/>
          <Icon name='notifications-outline' size={40}/>
        </View>
        <View style={{width:'100%',height:'100%', backgroundColor:'#BEACC4', alignItems:'center'}}>
          <Image source='https://iili.io/pDhyrP.png' style={{width:'90%',height:200, backgroundColor:'black',borderRadius:20,marginTop:20}}></Image>
          <View style={{flexDirection:'row', justifyContent:'space-between',width:'90%',marginTop:20}}>
              <TouchableOpacity style={{borderRadius:20,backgroundColor:'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>All coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:20,backgroundColor:'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Hot coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:20,backgroundColor:'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Hot tea</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:'95%'}}>
            <FlatList
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                data={listData}
                renderItem={renderItem}
                numColumns={2}
            />
          </View>
        </View>
    </View>
  );
}

const renderItem = ({item}) => {
  return (
    <View style={{backgroundColor:'black',width:'45%', alignItems:'center',marginTop:20,padding:20, borderRadius:20}}>
        <Image source={item.image} style={{width:100,height:100}}></Image>
        <View style={{flexDirection:'row', width:'99%', justifyContent:'space-between', marginTop:20}}>
          <Text style={{color:'white',fontSize:15}}>{item.name}</Text>
          <Text style={{color:'yellow', fontSize:16}}>$ {item.price}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-end', width:'100%', height:30, marginTop:10}}>
            <TouchableOpacity style={{position:'absolute',right:-20,backgroundColor:'#F7B9AC', width:60, height:50,borderBottomRightRadius:20 ,borderTopLeftRadius:20, justifyContent:'center', alignItems:'center'}}>
                <Icon name='add-circle-outline' size={30} color='black'></Icon>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141416',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
