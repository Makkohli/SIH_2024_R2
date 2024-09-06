import { Text, View } from "react-native";
import Login from "./Screens/Login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,                    // Takes up the full available screen space
        justifyContent: "center",    // Vertically centers the content
        alignItems: "center",        // Horizontally centers the content
      }}
    >
      <Login/>
    </View>
  );
}
