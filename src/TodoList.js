import React from "react";
import { StyleSheet, SafeAreaView, View, Button, FlatList, StatusBar } from 'react-native';
import Todo from "./Todo.js";
import Footer from "./Footer.js";

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: (todo) => !todo.completed,
  SHOW_COMPLETED: (todo) => todo.completed,
};

function TodoList (props) {
  const { actions, todos } = props;
  const [filter, setFilter] = React.useState("SHOW_ALL");

  const handleShow = (filter) => {
    setFilter(filter);
  };

  const handleClearCompletedDoc = () => {
    actions.clearCompletedDoc();
  };

const renderFooter = (completedCount) => {
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onShow={handleShow.bind(this)}
          onClearCompleted={handleClearCompletedDoc.bind(this)}
        />
      );
    }
  }

  const filteredTodos = todos.filter(TODO_FILTERS[filter]);

  const completedCount = todos.reduce((count, todo) => {
    return todo.completed ? count + 1 : count;
  }, 0);

  if (!todos.length) {
    return (
      <FlatList style={styles.todolist}></FlatList>
    )
  }

  const renderItems = ({item}) => (
    <Todo todo={item}  deleteRestTodo={actions.deleteRestTodo} completeRestTodo={actions.completeRestTodo}/>
  )

  return (
    <View style={styles.main}>
        <FlatList data={filteredTodos} keyExtractor={item => item.id} renderItem={renderItems} style={styles.todolist}>
        </FlatList>
        {renderFooter(completedCount)}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
	  borderTopWidth: 1,
    //borderStyle: 'solid', 
    borderColor: '#e6e6e6',
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0 
    alignContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },  
});

export default TodoList;