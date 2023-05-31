import {Text,View, StyleSheet, FlatList, TextInput} from 'react-native'
import Message from '../components/message'
import Chats from '../assets/dumeydata/Chats'
import MessageInput from '../components/NewMessageInput/MessageInput'
import { StatusBar } from 'expo-status-bar'
export default function ChatScreen (){
const reversed = [...Chats.messages].reverse()
return(
    <View style={styles.page}>
        <StatusBar style='light'/>
    <FlatList 
    data={reversed}  
    renderItem={({item})=> (
        <Message message={item} />
    )}
showsVerticalScrollIndicator={false}
inverted
    />
<MessageInput/>
    </View>
)
}

const styles = StyleSheet.create({
    page: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 20
    }
})