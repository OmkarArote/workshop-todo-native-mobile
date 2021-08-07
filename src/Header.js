import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoTextInput from "./TodoTextInput.js";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

function Header(props) {

  const { title, addTodo } = props;

  const handleSave = (text) => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };

  const label = title;

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>{label}</Text>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </View>
  );

}

const styles = StyleSheet.create({
  h1: {
    //fontSize: 40,
    fontSize: RFPercentage(4),
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 15,
    fontFamily: 'Inter_500Medium',
  },

  page: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    //paddingRight: 10,
  }

});

export default Header;
