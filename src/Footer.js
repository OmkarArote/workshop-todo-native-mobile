import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import classnames from "classnames";

const FILTER_TITLES = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

function Footer (props) {
  const { activeCount } = props;

  const renderTodoCount = () => {
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <Text style={styles.todocount}>
       {activeCount || "No"} {itemWord} left
      </Text>
    );
  }

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = props;

    return (
      <Button title={selectedFilter} className={classnames({ selected: filter === selectedFilter })}
      onClick={() => onShow(filter)} style={{ cursor: "pointer" }}>{title}</Button>
    );
  }

  const renderFilterList = () => {
    return ["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map((filter) => (
      <Text style={styles.filters} key={filter}>{renderFilterLink(filter)}</Text>
    ));
  }

  useEffect(() => {
		//console.log("PROP Change: Active items is %d", activeCount);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCount]);

  return (
    <View style={styles.footer}>
      {renderTodoCount()}
      <View style={styles.filters}>{renderFilterList()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
	  height: 50,
	  textAlign: 'center',
	  fontSize: 12,
	  borderTopWidth: 1,
    borderStyle: 'solid', 
    borderColor: '#e6e6e6',
    //overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
  },

  filters: {
    fontSize: 5,
	  margin: 3,
	  paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
	  //borderWidth: 1,
    //borderStyle: 'solid', 
    //transparent;
    display: 'flex',
    borderBottomWidth: 3,
    textAlign: 'right',
    flexDirection: 'column',
  },
  
  todocount: {
    //float: 'left',
	  textAlign: 'left',
    fontWeight: '300',
  },

});

export default Footer;