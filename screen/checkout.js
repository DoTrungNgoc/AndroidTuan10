import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, FlatList,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ScreenCheckout({navigation,route}) {
  const [listOrder,setListOrder] = useState([]);
  const [itemTotal,setItemTotal] = useState(0);

  useEffect(()=>{
    setListOrder(route.params.listOrder.filter(x => x.total!=0));
    setItemTotal(route.params.listOrder.reduce((partialSum,value) => {
      console.log(value);
      return partialSum+Number(value.total*value.price)
    },0));
    
  },[])

  const handelQuantity = (id,quantity) => {
      let listTemp = listOrder;
      let deleted = false;
      listTemp.forEach(x => {
        if (x.id === id) {
          x.total = x.total + quantity;
          if (x.total == 0){
            deleted = true;
          }
        }
      });
      if (deleted) {
        listTemp =listTemp.filter(x => x.id != id);
      }
      setListOrder([...listTemp]);
      setItemTotal(listOrder.reduce((partialSum,value) => {
        console.log(value);
        return partialSum+Number(value.total*value.price)
      },0));
  }


  const RenderItem = ({...item}) => {
   
    return (
      <View
        style={{
          width:'100%',
          height:130,
          backgroundColor:'#FADDF7',
          marginBottom:20,
          borderRadius:20,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}
      >
        <View  style ={{height:'100%',width:110,backgroundColor:'black',borderTopLeftRadius:20,borderBottomLeftRadius:20,alignItems:'center',justifyContent:'center'}}>
            <Image
                source={item.image}
                style={{width:90,height:90}}
              />
        </View>
        <View style={{width:150, justifyContent:'center'}}>
            <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>{item.name}</Text>
            <Text style={{color:'red',fontSize:20, fontWeight:'bold'}}>${Number(item.price * item.total)}</Text>
        </View>
         <View style={{flexDirection:'column',width:50,height:'95%',backgroundColor:'#F6C5F1', borderRadius:20,marginRight:5,justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{handelQuantity(item.id,1)}} style={{width:30,height:30,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:30,fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize:25,fontWeight:'bold'}}>{item.total}</Text>
            <TouchableOpacity onPress={()=>handelQuantity(item.id,-1)} style={{width:30,height:30,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:30,fontWeight:'bold'}}>-</Text>
            </TouchableOpacity>
         </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:10,width:'100%',height:70,backgroundColor:'#F7B9AC'}}>
          <Icon onPress={() => navigation.navigate('ScreenHome')} name="arrow-back" size={50} color="black" />
          <Text style={{fontWeight:'bold', fontSize:24}}>Checkout</Text>
          <Icon name='chatbox-outline' size={40}/>
        </View>
        <View style={{width:'100%', height:450}}>
          <FlatList 
              style={{padding:20}}
              data={listOrder}
              renderItem = {(item) => <RenderItem {...item.item}/>}
          />
        </View>
        <View style={{width:'90%'}}>
          <Text style={{margin:20,fontSize:20,fontWeight:'bold'}}>Special request to Us</Text>
          <TextInput style={{padding:10,fontSize:20,color:'#F7B9AC', width:'100%',height:80, borderColor:'yellow', borderWidth:1,borderRadius:15}} placeholder='Add your note here'></TextInput>
        </View>
        <View style={{width:'90%', flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Item total</Text>
          <Text style={{fontSize:20, fontWeight:'bold',color:'blue'}}>${itemTotal}</Text>
        </View>
        <TouchableOpacity style={{width:'90%', height:80, backgroundColor:'#F7B9AC',justifyContent:'center', alignItems:'center',borderRadius:20, marginTop:30}}>
          <Text style={{fontSize:22, fontWeight:'bold',color:'white'}} >PROCESS TO PAYMENT</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEACC4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
