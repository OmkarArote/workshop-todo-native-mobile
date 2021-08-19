import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Todo(props) {
  const { todo, completeRestTodo, deleteRestTodo } = props;

  const [isChecked, setIsChecked] = React.useState(todo.completed);

  const [isVisible, setIsVisible] = React.useState(true);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    completeRestTodo(todo.id, todo.text, todo.completed);
  }

  const handleVisible = () => {
    setIsVisible(!isVisible);
    deleteRestTodo(todo.id);
  }

  const rightAction = () => {
    return (
      <View style={styles.rightSwipe}>
        <EvilIcons name='trash' size={32} color='white' style={{ paddingRight: 5 }} />
        <Text style={{ color: "#fff" }}>Delete</Text>
      </View>
    );
  }

  const leftAction = () => {
    if (todo.completed) {
      return (
        <View style={styles.leftSwipeIncomplete}>
          <Ionicons name="md-radio-button-off-outline" size={26} color='white' style={{ paddingLeft: 20 }} />
          <Text style={{ color: '#fff' }}>Incomplete</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.leftSwipeComplete}>
          <Ionicons name="md-checkmark-circle" size={26} color='#fff' style={{ paddingLeft: 16 }} />
          <Text style={{ color: "#fff" }}>Complete</Text>
        </View>
      );
    }
  }

  const swipeRef = useRef();

  const closeSwipable = () => {
    swipeRef?.current?.close();
  }

  if (isVisible === false) {
    return (
      <View></View>
    );
  }

  return (
    <Swipeable
      ref={swipeRef}
      onSwipeableOpen={closeSwipable}
      renderLeftActions={leftAction}
      renderRightActions={rightAction}
      onSwipeableRightOpen={handleVisible}
      onSwipeableLeftOpen={handleCheck}
      overshootFriction={1}
      friction={1}
      containerStyle={{overflow: 'hidden'}}
    >
      <View style={styles.item}>
          <CheckBox
            style={styles.toggle}
            checkedIcon='check-circle'
            uncheckedIcon='radio-button-unchecked'
            checked={isChecked}
            onIconPress={handleCheck}
            color={'#3293b3'}
            iconType={'material'}
          />
          <Text style={isChecked ? styles.complete : styles.incomplete}>{todo.text}</Text>
        <TouchableOpacity onPress={handleVisible}><EvilIcons name='trash' size={28} color='#af5b5e'/></TouchableOpacity>
      </View>
    </Swipeable>
  );
}

export default Todo;

const styles = StyleSheet.create({
  complete: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'Inter_300Light',
    flex: 1,
    flexWrap: 'wrap'
  },
  incomplete: {
    fontSize: 18,
    fontFamily: 'Inter_300Light',
    flex: 1,
    flexWrap: 'wrap'
  },
  toggle: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    paddingRight: 10,
    borderColor: '#d0dde2',
    borderWidth: 0.5,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 3,
  },
  rightSwipe: {
    flex: 1,
    backgroundColor: '#af5b5e',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    fontFamily: 'Inter_300Light',
    marginBottom: 5,
  },
  leftSwipeComplete: {
    flex: 1,
    backgroundColor: '#3293b3',
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 15,
    fontFamily: 'Inter_300Light',
    marginBottom: 5,
  },
  leftSwipeIncomplete: {
    flex: 1,
    backgroundColor: '#20b286',
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 15,
    fontFamily: 'Inter_300Light',
    marginBottom: 5,
  },
});
