import React from "react";
import { TextInput, StyleSheet } from "react-native";
import classnames from "classnames";

function TodoTextInput(props) {
  const { newTodo, placeholder, onSave } = props;
  const [text, setText] = React.useState("");


  const handleSubmit = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue == 'Enter') {
      onSave(text.trim());
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (text) => {
    setText(text);
  }

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <TextInput style={[styles.newtodo, styles.newtodoedit]}
      className={classnames({
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      multiline={true}
      onBlur={handleBlur}
      onChangeText={text => handleChange(text)}
      onKeyPress={handleSubmit}
    />
  );
}

const styles = StyleSheet.create({
  newtodo: {
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 60,
    //border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    //box-shadow: inset, 
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 1,
    shadowColor: 'rgba(0,0,0,0.03)',
    elevation: 1, // for Android
  },

  newtodoedit: {
    fontStyle: 'italic',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.4)',
    position: 'relative',
    margin: 0,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 20,
    //fontFamily: 'inherit',
    //fontWeight: 'inherit',
    //lineHeight: 1.4,
    //textColor: 'inherit',
    padding: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    //box-shadow: inset 0 -1px 5px 0, 
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 5,
    shadowOpacity: 0,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    //box-sizing: border-box;
    //-webkit-font-smoothing: antialiased;
    //-moz-osx-font-smoothing: grayscale;
  },

});

export default TodoTextInput;