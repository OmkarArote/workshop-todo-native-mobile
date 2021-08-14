import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";

function TodoTextInput(props) {

  const { newTodo, placeholder, onSave } = props;

  const [text, setText] = React.useState("");
  const [multiline, setMultiline] = React.useState(false);

  const handleSubmit = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue == 'Enter') {
      onSave(text.trim());
      if (newTodo) {
        setMultiline(false);
        setText("");
      }
    }
  };

  const handleChange = (text) => {
    setText(text);
    if (multiline == false) {
      setMultiline(true);
    }
  }

  const handleBlur = (text) => {
    if (!newTodo) {
      onSave(text);
    }
  };

  return (
    <View style={styles.card}>
      <TextInput style={[Platform.select({
        web: {
          outlineStyle: 'none',
        },
      }), styles.newtodo]}
        type="text"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        multiline={multiline}
        onBlur={text => handleBlur(text)}
        onChangeText={text => handleChange(text)}
        onKeyPress={text => handleSubmit(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#d0dde2',
    borderWidth: 0.5,
    borderRadius: 12,
  },
  newtodo: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 23,
    fontFamily: 'Inter_300Light',
    width: '100%',
    fontSize: 18,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 12,
    height: 45,
  },
});

export default TodoTextInput;