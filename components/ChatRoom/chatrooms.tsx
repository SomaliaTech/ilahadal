import { StyleSheet ,Text, Image, View, Pressable} from 'react-native';
import {TypeProps} from '../../types/chatTypes'
import { Link } from 'expo-router';

type TweetPorps = {
  item: TypeProps
  }
  

export default function ChatRooms({item}: TweetPorps){
  const users = item.users[1]
const onPress =()=> {

}
    return (
      <Link href={{pathname: "/chatScreen", params: {user: users.name}}} asChild >
        <Pressable onPress={onPress}  style={styles.container}>
  <Image source={{uri: users.imageUri}} style={styles.image}/>
  {item.newMessages &&

  <View style={styles.subcontainer}>
    <Text style={styles.textMessae}>{item.newMessages}</Text>
  </View>
  }
  <View style={styles.row}>
    <View style={styles.subRow}>
    <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>{users?.name}</Text>
    <Text style={{marginLeft :'auto', fontSize: 17, color: 'gray'}}>{item.lastMessage.createdAt}</Text>
    </View>
  <Text numberOfLines={1} style={styles.text}>{item.lastMessage.content}</Text>
  </View>
</Pressable>
</Link>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        padding:10
        },
          subcontainer: {
            backgroundColor: '#3777f0',
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 45,
            top: 10,
          },
          row: {
            flex: 1,
            justifyContent: 'center',
        // width: '100%'
          },
          subRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        image: {
          width: 50, 
          height: 50,
          borderRadius: 50,
        resizeMode: 'cover',
        marginRight: 10
        },
        textMessae: {
          fontSize: 14,
          color: 'white',
          textAlign: 'center'
        },
        text: {
          fontSize: 14,
          fontWeight: '500',
          letterSpacing : 0.4,
          color: 'lightgray'
        }
        
})