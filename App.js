import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import User from './components/User';

export default function App() {

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([{name:"James", id: 22}, {name:"Marco",id:100}])

  const addTodo = () => {
    if(title.length <= 1) return
    setTodos([...todos, {name: title, id: Math.random()}])
    setTitle('')
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <Text>Entered name: {title}</Text>
      <TextInput placeholder='name' style={styles.input} value={title} onChangeText={setTitle}/>
      <Button title='Add New User' onPress={addTodo}/>

      {todos.map((todo, index)=>{
        return(
          <User key={index} name={todo.name}/>
        )
      })}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input:{
    borderWidth: 2,
    width: 200,
    height: 50,
    padding: 10,
    borderRadius: 10,
  }
});
