/*eslint-disable*/

import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const styles = StyleSheet.create({
  text: {
    alignSelf: "flex-start",
    fontSize: 20,
    color: "#2C93D6",
  },
});
export default function Home({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{route.params.user}</Text>
        <Text style={styles.text}>please click to start scanning</Text>
        <Button
          style={{ marginTop: 20 }}
          icon="camera"
          mode="contained"
          uppercase={false}
          onPress={() =>
            navigation.navigate("Scanner", { user: route.params.user })
          }
        >
          Scanning
        </Button>
      </View>
    </View>
  );
}
