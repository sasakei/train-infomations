import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import _ from "lodash";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";

const URL = `https://tetsudo.rti-giken.jp/free/delay.json`;

export default HomeScreen = ({ navigation }) => {
  const [infomations, setInfomations] = useState([]);
  useEffect(() => {
    fetchInfomations();
  }, []);

  const fetchInfomations = async () => {
    try {
      const response = await axios.get(URL);
      setInfomations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={infomations}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
