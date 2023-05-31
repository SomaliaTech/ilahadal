import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TypeProps } from "../../types/MessageType";

const myid =  "u1"

type PropsMessage = {
    message: TypeProps
}

const Message = ({message}: PropsMessage) => {

  const Isme = message.user.id === myid
  return (
    <View
      style={[
        styles.container,
        
   
    Isme ?  styles.leftContainer : styles.rightContainer
       
      ]}
    >
      <Text style={[{}, { color: Isme ? "white" : "black" }]}>{message.content}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    // maxWidth: "75%",
    maxWidth: '75%'
  },
 
leftContainer : {
    backgroundColor: '#3777f0',
    marginLeft: 'auto',
    marginRight: 10
},
rightContainer: {
    backgroundColor: 'lightgray',
    marginRight: 'auto',
    marginLeft: 10
}
});
