import React , {useState}from 'react'
import {StyleSheet , Text, TextInput , TouchableOpacity, View} from 'react-native'

export default function Form() {

    const [input,setInput] = useState('')

    const inputChange = (val) =>{
        setInput(val);
      }

    const addTodo = () =>{
        setItems([{
          id:rand(),name:input
        },...items])
      }

    return (
        <>
            <TextInput
            placeholder='Type your Todo'
            style = {styles.input}
            onChangeText={inputChange}
            />

            <TouchableOpacity onPress={addTodo} >
            <View style={styles.touch}>
                <Text style={styles.text}>ADD TODO</Text>
            </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        margin:8,
        padding:8,
        alignSelf:'stretch',
        borderColor:'#fff'
      },  
      touch : {
        marginTop:20,
        color:'#fff',
        width:100,
        alignSelf:'center'
      },
      text:{
        backgroundColor:'#06BCEE',
        padding:10,
        textAlign:'center',
        color:'#fff',
        elevation:5
      }
})
