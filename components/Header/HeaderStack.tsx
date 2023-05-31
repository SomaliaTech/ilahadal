import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
const HeaderStack = () => {
  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.headerImage}/>
    <Text style={styles.text}>ILAHADAL</Text>
    <View style={styles.iconsContainer}>
        <Ionicons name='search' size={25} color={'gray'} style={styles.icon} />
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
    </View>
    </View>
  )
}

export default HeaderStack

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    text: {
        fontSize: 19,
        color: 'white',
        fontWeight: '500',
       

    },
    icon: {
        marginHorizontal: 5
    }

})