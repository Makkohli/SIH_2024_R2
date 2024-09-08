import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
            <Ionicons
              name={"arrow-back-outline"}
              color={"#333"}
              size={25}
            />
          </TouchableOpacity>

          {/* Welcome Text */}
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Hey,</Text>
            <Text style={styles.headingText}>Welcome</Text>
            <Text style={styles.headingText}>Back</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Ionicons name={"mail-outline"} size={24} color={"#666"} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <SimpleLineIcons name={"lock"} size={24} color={"#666"} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry={secureEntry}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry((prev) => !prev);
                }}
              >
                <SimpleLineIcons name={secureEntry ? "eye" : "eye-off"} size={20} color={"#666"} />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('Forgotpassword')}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButtonWrapper}>
              <Text style={styles.loginText} onPress={() => navigation.navigate('Loginotp')} >Login</Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor:"#E8E8E8",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    marginVertical: 30,
  },
  headingText: {
    fontSize: 32,
    color: "#333",
    fontFamily: 'montbold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 12,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'montregular',
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#0052CC",
    fontFamily: 'montsemibold',
    marginVertical: 5,
  },
  loginButtonWrapper: {
    backgroundColor: "#000000",// "#0052CC",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'montbold',
    textAlign: "center",
  },
});
