/*eslint-disable*/

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const userData = [
  {
    username: "admin",
    password: "123",
  },
  {
    username: "Driver1@viatick.com",
    password: "Driver@1",
  },
  {
    username: "Driver2@viatick.com",
    password: "Driver@2",
  },
  {
    username: "Driver3@viatick.com",
    password: "Driver@3",
  },
  {
    username: "Driver4@viatick.com",
    password: "Driver@4",
  },
  {
    username: "Driver5@viatick.com",
    password: "Driver@5",
  },
  {
    username: "Driver6@viatick.com",
    password: "Driver@6",
  },
  {
    username: "Driver7@viatick.com",
    password: "Driver@7",
  },
];

export default function Login({ navigation }) {
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");

  return (
    <View style={{ marginTop: "12%", marginLeft: "9%", marginRight: "9%" }}>
      <TextInput
        style={styles.textInput}
        label="username"
        value={user}
        onChangeText={(value) => {
          setUser(value);
        }}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        label="password"
        value={pwd}
        onChangeText={(value) => {
          setPwd(value);
        }}
      ></TextInput>

      <Button
        mode="contained"
        uppercase={false}
        onPress={() => {
          if (Check(user.trim(), pwd.trim())) {
            navigation.navigate("Home", { user });
          } else {
            alert("Username or password is incorrect");
          }
        }}
      >
        Login
      </Button>
    </View>
  );
}

function Check(user, pwd) {
  return userData.some((item) => {
    return item.username === user && item.password === pwd;
  });
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: "10%",
    backgroundColor: "#fff",
  },
});
