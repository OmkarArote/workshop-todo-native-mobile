import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
//import CheckBox from '@react-native-community/checkbox';

function Todo (props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  return (
       <View style={styles.item}>
         <View style={styles.todos}>
          <CheckBox
            style={styles.toggle}
            checkedIcon='check-circle'
            uncheckedIcon='circle-o'
            checked={todo.completed}
            onIconPress={() => completeRestTodo(todo.id, todo.text, todo.completed)}
          />
          <Text style={todo.completed ? styles.completed : styles.incompleted}>{todo.text}</Text> 
        </View>
        <Button title="x" style={styles.destroy} onPress={() => deleteRestTodo(todo.id)} />
       </View>
    );
}

export default Todo;

const styles = StyleSheet.create({
  completed: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    textAlign: 'left',
  },
  incompleted: {
    fontSize: 20,
    textAlign: 'left',
  },
  destroy: {
   alignSelf: "flex-end",
  },
  todos: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  item: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor:  '#ccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
