import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import listData from '../data/store';
var listOrder = [];

export default function ScreenHome({navigation}) {
  const [clickBtn1,setClickBtn1] = useState(true);
  const [clickBtn2,setClickBtn2] = useState(false);
  const [clickBtn3,setClickBtn3] = useState(false);
  const [data,setData] = useState([]);

  const handelFilterData = (type) => {
    if (type === 3) {
      setData(listData);
    } else {
      setData(listData.filter(x => x.type === type))
    }
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
              <TouchableOpacity style={{position:'absolute',right:-20,backgroundColor:'#F7B9AC', width:60, height:50,borderBottomRightRadius:20 ,borderTopLeftRadius:20, justifyContent:'center', alignItems:'center'}}
                onPress={()=>{
                  handelOrder(item);
                  navigation.navigate('ScreenCheckout',{listOrder:listOrder})
                }}
              >
                  <Icon name='add-circle-outline' size={30} color='black'></Icon>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
  
  const handelOrder = (item) => {
    let flag = false;
    listOrder.forEach(x => {
      if (x.id === item.id) {
        x.total = x.total + 1;
        flag = true;
      }
    });
    if (!flag) {
      listOrder.push({...item,total:1});
    }
    console.log(listOrder);
  }

  useEffect(()=>{
    handelFilterData(1)
  },[])



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
              <TouchableOpacity style={{borderRadius:20,backgroundColor:clickBtn1?'':'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}
                onPress = {() =>{
                  setClickBtn1(true);
                  setClickBtn2(false)
                  setClickBtn3(false)
                  handelFilterData(3)
                }}
              >
                <Text style={{fontWeight:'bold',fontSize:20}}>All coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:20,backgroundColor:clickBtn2?'':'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}
                onPress = {() =>{
                  setClickBtn1(false);
                  setClickBtn2(true);
                  setClickBtn3(false);
                  handelFilterData(1)
                }}
              >
                <Text style={{fontWeight:'bold',fontSize:20}}>Hot coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:20,backgroundColor:clickBtn3?'':'#F1EAF3',borderColor:'yellow',borderWidth:2,padding:10}}
                onPress = {() =>{
                  setClickBtn1(false);
                  setClickBtn2(false);
                  setClickBtn3(true);
                  handelFilterData(2)
                }}
              >
                <Text style={{fontWeight:'bold',fontSize:20}}>Hot tea</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:'95%', height:500}}>
            <FlatList
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                data={data}
                renderItem={renderItem}
                numColumns={2}
            />
          </View>
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
