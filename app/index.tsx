import { StyleSheet ,Text, Image, View, FlatList} from 'react-native';
import ChatRooms from '../components/ChatRoom/chatrooms';
import Chatroom from '../assets/dumeydata/Chatroom';
import HeaderStack from '../components/Header/HeaderStack';
import BottomHeader from '../components/Header/BottomHeader';

export default function TabOneScreen() {
  return (
<View style={styles.page}>
<HeaderStack/>
<FlatList 
data={Chatroom}
renderItem={({item})=> (
 
<ChatRooms item={item}/>
  
)}
showsVerticalScrollIndicator={false}
/>  

<BottomHeader/>
</View>
  );
}

const styles = StyleSheet.create({
page: {
  backgroundColor: '#394249',
  paddingTop: 40,
  flex:1
}


});
