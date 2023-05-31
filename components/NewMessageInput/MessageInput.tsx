import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
const MessageInput = () => {
const navigation = useNavigation()    
const pramas = useLocalSearchParams()
navigation.setOptions({title: pramas.user})

  const [message, setMessage] = useState("");
  
  const onSend = () => {
    console.warn("send");
    setMessage("");
  };

  const onClikedPlus = () => {
    console.warn("you cliked plus");
  };
  const Onpress = () => {
    if (message) {
      onSend();
    } else {
      onClikedPlus();
    }
  };

  return (
    <KeyboardAvoidingView
    style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <Entypo
          name="emoji-happy"
          size={22}
          color="white"
          style={{ marginLeft: 5 }}
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Ilahadal message"
          style={styles.input}
          placeholderTextColor={"white"}
        />
        <Ionicons
          name="ios-camera-outline"
          size={27}
          color="white"
          style={{ paddingLeft: 10 }}
        />
        <MaterialCommunityIcons
          name="microphone"
          size={21}
          color="white"
          style={{ marginRight: 5 }}
        />
      </View>
      <Pressable onPress={Onpress} style={styles.plusContainer}>
        {message ? (
          <MaterialCommunityIcons name="send" size={20} color="white" />
        ) : (
          <MaterialCommunityIcons name="plus" size={20} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#949494",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
    gap: 10,
  },
  input: {
    flex: 1,
    color: "white",
  },
  plusContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
