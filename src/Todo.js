import React from "react";
import Card from 'react-native-ui-lib/card';
import { StyleSheet, View, Button, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

function Todo(props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  return (
    <View>
    <Card
      style={styles.item}
      row={true}
      enableShadow={false}
    >
      <View style={styles.todos}>
        <CheckBox
          style={styles.toggle}
          checkedIcon='check-circle'
          uncheckedIcon='circle-o'
          checked={todo.completed}
          onIconPress={() => completeRestTodo(todo.id, todo.text, todo.completed)}
        />
        <Text style={todo.completed ? styles.complete : styles.incomplete}>{todo.text}</Text>
      </View>
      <Button title="x" style={styles.destroy} color='#af5b5e' onPress={() => deleteRestTodo(todo.id)} />
    </Card>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  complete: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'Inter_300Light',
  },
  incomplete: {
    fontSize: 18,
    fontFamily: 'Inter_300Light',
  },
  destroy: {
    alignSelf: "flex-end",
    //backgroundColor: '#e8f4f8',
  },
  todos: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#e8f4f8',
  },
  item: {
    marginBottom: 5,
    alignItems: 'center',
    paddingRight: 10,
  },
});
