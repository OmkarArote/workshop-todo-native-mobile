import React, { useRef } from "react";
import Card from 'react-native-ui-lib/card';
//import Checkbox from 'react-native-ui-lib/checkbox';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Todo(props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  const rightAction = () => {
    return (
      <Card style={styles.rightSwipe}>
        <EvilIcons name='trash' size={32} color='white' style={{ paddingRight: 5 }} />
        <Text style={{ color: "#fff" }}>Delete</Text>
      </Card>
    );
  }

  const leftAction = () => {
    if (todo.completed) {
      return (
        <Card style={styles.leftSwipeI}>
          <Ionicons name="md-radio-button-off-outline" size={26} color='white' style={{ paddingLeft: 20 }} />
          <Text style={{ color: '#fff' }}>Incomplete</Text>
        </Card>
      );
    }
    else {
      return (
        <Card style={styles.leftSwipeC}>
          <Ionicons name="md-checkmark-circle" size={26} color='#fff' style={{ paddingLeft: 16 }} />
          <Text style={{ color: "#fff" }}>Complete</Text>
        </Card>
      );
    }
  }

  const swipeRef = useRef();

  const closeSwipable = () => {
    swipeRef?.current?.close();
  }

  return (
    <Swipeable
      ref={swipeRef}
      onSwipeableOpen={closeSwipable}
      renderLeftActions={leftAction}
      renderRightActions={rightAction}
      onSwipeableRightOpen={() => deleteRestTodo(todo.id)}
      onSwipeableLeftOpen={() => completeRestTodo(todo.id, todo.text, todo.completed)}
      overshootFriction={0.01}
    >
      <Card
        style={styles.item}
        row={true}
        enableShadow={false}
      >
        <View style={styles.todos}>
          <CheckBox
            style={styles.toggle}
            checkedIcon='check-circle'
            uncheckedIcon='radio-button-unchecked'
            checked={todo.completed}
            onIconPress={() => completeRestTodo(todo.id, todo.text, todo.completed)}
            color={'#3293b3'}
            iconType={'material'}
          />
          <Text style={todo.completed ? styles.complete : styles.incomplete}>{todo.text}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteRestTodo(todo.id)}><EvilIcons name='trash' size={28} color='#af5b5e' /></TouchableOpacity>
      </Card>
    </Swipeable>
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
  toggle: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  todos: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginBottom: 5,
    alignItems: 'center',
    paddingRight: 10,
    borderColor: '#d0dde2',
    borderWidth: 0.5,
    height: 55,
  },
  rightSwipe: {
    flex: 1,
    backgroundColor: '#af5b5e',
    borderRadius: 12,
    justifyContent: 'center',
    height: 55,
    alignItems: 'flex-end',
    paddingRight: 15,
    fontFamily: 'Inter_300Light',
  },
  leftSwipeC: {
    flex: 1,
    backgroundColor: '#3293b3',
    borderRadius: 12,
    justifyContent: 'center',
    height: 55,
    paddingLeft: 15,
    fontFamily: 'Inter_300Light',
  },
  leftSwipeI: {
    flex: 1,
    backgroundColor: '#20b286',
    borderRadius: 12,
    justifyContent: 'center',
    height: 55,
    paddingLeft: 15,
    fontFamily: 'Inter_300Light',
  },
});
