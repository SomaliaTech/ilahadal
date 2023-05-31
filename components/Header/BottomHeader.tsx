import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  EvilIcons
} from '@expo/vector-icons'

const BottomHeader = () => {
  return (
    <View style={styles.root}>
     <View style={styles.container}>
      <Pressable style={styles.chat}>

     <Ionicons name="ios-chatbubble" size={27} color="lightgray" />
      </Pressable>
     <Ionicons name="call" size={30} color="lightgray" />
     <MaterialIcons name="amp-stories" size={30} color="lightgray" />
     </View>
     <View style={styles.leftIcons}>
      <Pressable style={styles.icon}>

     <Ionicons name="ios-camera-outline" size={28} color="black" />
      </Pressable>
      <Pressable style={styles.icon}>
        
     <EvilIcons name="pencil" size={33} color="black" />
      </Pressable>
     </View>
    </View>
  )
}

export default BottomHeader

const styles = StyleSheet.create({
  root: {

  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#4449',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
    
  },
  leftIcons : {
    position: 'absolute',
    bottom: 100,
    right: 10,
    gap: 10
  },
  icon:{
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  chat:{
   alignItems: 'center',
    width: 90,
    height: 40,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: 'center'
  }
})