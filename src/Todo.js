import React from "react";
import Card from 'react-native-ui-lib/card';
import { StyleSheet, View, Button, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

function Todo(props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  return (
    <Card
      style={styles.item}
      row={true}
      enableShadow={true}
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
  },
  todos: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginBottom: 4,
    alignItems: 'center',
    paddingRight: 10,
  },
});
