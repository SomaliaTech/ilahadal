import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  Link,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useLocalSearchParams, withLayoutContext } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { View, Text } from "../components/Themed";
import { Entypo, Foundation, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Image } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};


export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
 
  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="chatScreen" options={{ header: HeaderOption ,}} />
        </Stack>
      </ThemeProvider>
    </>
  );
}

const HeaderOption = (props) => {
  const router = useNavigation()

  return (
    <View
      style={{
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#484b48",
        padding: 10,
        alignItems: 'center',
        gap: 20
      }}
    >
      {/* <Link to='/'> */}
      
      <Feather
    onPress={()=> router.goBack()}
    name="chevron-left" size={29} color="lightgray" />
    {/* </Link> */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
        }}
        style={{ width: 30, height: 30, borderRadius: 20 }}
      />
      <Text style={{fontSize: 18,color: 'white', flex: 1}}>{props.options.title} </Text>
      <Ionicons name="ios-call-outline" size={24} color="lightgray" />
      <Foundation name="video" size={24} color="lightgray" />
      <Entypo name="dots-three-vertical" size={24} color="lightgray" />
    </View>
  );
};
