import React from "react";
import { StyleSheet, SafeAreaView, View, Button, Text, FlatList } from 'react-native';
import classnames from "classnames";
import { CheckBox } from 'react-native-elements'
//import CheckBox from '@react-native-community/checkbox';

function Todo (props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  const deleteTodo = (id) => {
    deleteRestTodo(id);
  }

  return (
       <View style={styles.item}>
         <CheckBox
        style={styles.toggle}
        onValueChange={todo.completed}
        onChange={() => completeRestTodo(todo.id, todo.text, todo.completed)}
         />
         <Text style={todo.completed ? styles.completed : styles.incompleted}>{todo.text}</Text>
         <Button title="x" style={styles.destroy} onPress={() => deleteTodo(todo.id)} />
       </View>
    // <Text style={todo.completed ? styles.completed : styles.completed}
    //   className={classnames({
    //     completed: todo.completed,
    //   })}
    // >
    // <View style={styles.view}>
    //   <CheckBox
    //     style={styles.toggle}
    //     onValueChange={todo.completed}
    //     onChange={() => completeRestTodo(todo.id, todo.text, todo.completed)}
    //   />
    //   <Text style={todo.completed ? styles.completed : styles.incompleted}>{todo.text}</Text>
    //   <Button title="delete" style={styles.destroy} onPress={() => deleteRestTodo(todo.id)} />
    // </View>
    // </Text>
  );
}

export default Todo;

const styles = StyleSheet.create({
  completed: {
    textDecorationLine: 'line-through',
  },
  incompleted: {
    //textDecorationLine: 'line-through',
  },

  destroy: {
    textDecorationLine: 'line-through',
  },
  todos: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor:  '#ccc',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
