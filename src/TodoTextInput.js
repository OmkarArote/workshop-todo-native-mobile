import React from "react";
import Card from 'react-native-ui-lib/card';
import { TextInput, StyleSheet } from "react-native";

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
    <Card
      row={true}
      enableShadow={false}
      style={styles.card}
    >
      <TextInput style={styles.newtodo}
        type="text"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        multiline={multiline}
        onBlur={text => handleBlur(text)}
        onChangeText={text => handleChange(text)}
        onKeyPress={text => handleSubmit(text)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  newtodo: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 23,
    fontFamily: 'Inter_300Light',
    width: '100%',
    fontSize: 18,
  },
  card: {
    borderColor: '#d0dde2',
    borderWidth: 0.5,
  },
});

export default TodoTextInput;