import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import Task from './Components/Task';

export default function App() {

  const[task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask=()=>{


    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }


  const completeTask=(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }
  return (
    <View style={styles.container}>

     <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitle}>Today's Tasks</Text>

       <View style={styles.items}>
       {
        taskItems.map((item,index)=>{
          return(
            <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
          );
        })
       }




       </View>

     </View>

     <KeyboardAvoidingView
        
        style={styles.writeTaskWrapper}
     >
      <TextInput style={styles.input} placeholder='Write a Task' value={task} onChangeText={text=>setTask(text)}/>
      <TouchableOpacity onPress={()=>handleAddTask()}>

        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>

        </View>
      </TouchableOpacity>
     </KeyboardAvoidingView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEa',
    
  },


  taskWrapper:{
  padding:80,
  paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',


  },
  items:{

    marginTop:30,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:100,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:20,

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:250,


  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFf",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#c0c0c0',
    borderWidth:1,
    marginLeft:20,

  },
  addText:{
    fontSize:30,
    fontWeight:'200',

  },
});
