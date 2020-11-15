import React , {useState}from 'react'
import {StyleSheet , Text, TextInput , TouchableOpacity} from 'react-native'

export default function Todo({item,deleteTodo}) {

    return (
        <TouchableOpacity onPress={() => deleteTodo(item.key)}>
             <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item :{
       padding:16,
       marginTop:15,
       borderColor:'#bbb',
       borderWidth:2,
       borderStyle:'dashed',
       borderRadius:10
    },
})