import React , {useState,useRef} from 'react';
import {StyleSheet , Text, TextInput , FlatList, View , Alert , TouchableWithoutFeedback,Keyboard} from 'react-native'
import Header from './component/Header'
// import Form from './component/Form'
import Todo from './component/Todo'
import AddTodo from './component/AddTodo'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const deleteTodo = (key) => {
      setTodos(prevTodo => {
        return prevTodo.filter(todo => todo.key!==key)
      })
    }

  const addTodo = (val) => {

    if(val){
      const todo = {text:val,key:Math.random().toString()}
      setTodos(prevTodos => {
        return [
          todo,...prevTodos
          // todo,...todos
        ]
      })
    }else{
      Alert.alert('Error','Input Field cannot be empty')
    } 
  }

  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header />
            <AddTodo addTodo={addTodo}/>
            <View style={styles.content}>
              {/* add todo form */}
              <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                    <Todo item={item} deleteTodo = {deleteTodo}/>
                  )}
                />
              </View>
            </View>
              {/* Other way to output Lists */}
              {/* <ScrollView>
              {
                items.map(item => (
                  <Text style={styles.item} key={item.id}>{item.name}</Text>
                ))
              }
              </ScrollView>  */}
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
