import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { Header } from "react-native-elements";

export default App = () => {
  return (
    <>
      <Header
        centerComponent={{ text: "遅延路線一覧", style: { color: "#fff" } }}
        rightComponent={{ icon: "user", type: "font-awesome", color: "#fff" }}
      />
      <AppNavigator />
    </>
  );
};
