import { Text, View } from "react-native";
import Login from '../components/Login';
import { Redirect } from "expo-router";
import { useFonts } from 'expo-font';


export default function Index() {

  const [loaded, error] = useFonts({
    'appfont': require('./../assets/fonts/Outfit-Regular.ttf'),
    'appfontbold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'appfontsemibold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
  });
  
  if(!loaded)
  {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,                    // Takes up the full available screen space
        justifyContent: "center",    // Vertically centers the content
        alignItems: "center",        // Horizontally centers the content
      }}
    >
      {/* <Login/> */}
      <Redirect href={'/Home'}/>
    </View>
  );
}
