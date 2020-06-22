import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "50%",
    borderColor: "grey",
    borderWidth: 1,
    flexDirection: "row",
    padding: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "grey",
  },
});

const ListItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text numberOfLines={3} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;
