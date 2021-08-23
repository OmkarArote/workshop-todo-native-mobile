import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import Todo from "./Todo.js";
import Footer from "./Footer.js";
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: (todo) => !todo.completed,
  SHOW_COMPLETED: (todo) => todo.completed,
};

function TodoList(props) {

  const { actions, todos } = props;
  const [filter, setFilter] = React.useState("SHOW_ALL");
  const [index, setIndex] = React.useState(0);

  const handleShow = (filter) => {
    setFilter(filter);

    if (filter == "SHOW_ALL") {
      setIndex(0);
    } else if (filter == "SHOW_ACTIVE") {
      setIndex(1);
    } else if (filter == "SHOW_COMPLETED") {
      setIndex(2);
    }
  };

  const segmentFilter = (event) => {
    let val = '';

    if (event == 'All') {
      val = 'SHOW_ALL';
    } else if (event == 'Active') {
      val = 'SHOW_ACTIVE';
    } else if (event == 'Completed') {
      val = 'SHOW_COMPLETED';
    }

    handleShow(val);
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
      <View style={styles.filter}>
        <SegmentedControl 
          paddingVertical={10}
          values={['All', 'Active', 'Completed']}
          selectedIndex={index}
          onValueChange={(event) => segmentFilter(event)}
        />
        <FlatList style={styles.todolist}></FlatList>
      </View>
    )
  }

  const renderItems = ({ item }) => (
    <Todo todo={item} deleteRestTodo={actions.deleteRestTodo} completeRestTodo={actions.completeRestTodo} />
  )

  return (
    <>
      <View style={styles.filter}>
        <SegmentedControl
          paddingVertical={10}
          values={['All', 'Active', 'Completed']}
          selectedIndex={index}
          onValueChange={(event) => segmentFilter(event)}
        />
      </View>
      <View style={styles.main}>
        <FlatList style={styles.todolist}
          data={filteredTodos} keyExtractor={item => item.id} renderItem={renderItems} >
        </FlatList>
      </View>
      {renderFooter(completedCount)}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "center",
    paddingHorizontal: 10,
  },
  filter: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default TodoList;