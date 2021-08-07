import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import Card from 'react-native-ui-lib/card';

const FILTER_TITLES = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

function Footer(props) {
  const { activeCount } = props;

  const renderTodoCount = () => {
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <Text>
        {activeCount || "No"} {itemWord} left
      </Text>
    );
  }

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = props;

    return (
      <Button title={title} onPress={() => onShow(filter)} />
    );
  }

  const renderFilterList = () => {
    return ["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map((filter) => (
      <View key={filter}>
        {renderFilterLink(filter)}
      </View>
    ));
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCount]);

  return (
    <Card
      row={true}
      enableShadow={false}
    >
      <View style={styles.footer}>
        <Text> {renderTodoCount()} </Text>
      </View>
    </Card>
  );
}

// Adding Segment Control in TodoList component
//<Text> {renderFilterList()} </Text>

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 5,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

export default Footer;