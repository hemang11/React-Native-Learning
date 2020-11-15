import React , {useState}from 'react';
import {StyleSheet , Text, TextInput , View,Button} from 'react-native'

export default function AddTodo({addTodo}) {

    const [input,setInput] = useState('');

    // const inputChange = (val) => {
    //     setInput(val);
    // }

    // Both the Functions works the above and the below 
    function inputChange(val){
        setInput(val);
    }

    return (
        <>
        <View>
            <TextInput
            placeholder='Type your Todo'
            style = {styles.input}
            onChangeText={inputChange}
            />
            <View style={styles.button}>
                <Button title='Add Todo' onPress={() => addTodo(input)}/>
            </View>
        </View>

        </>
    )
}


const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        marginBottom:5,
        margin:8,
        padding:8,
        alignSelf:'stretch',
        borderColor:'#fff'
      },  
      
      button:{
          padding:16,
          elevation:5
      }
})