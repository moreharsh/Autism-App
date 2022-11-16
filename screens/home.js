import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function Home({ navigation }) {

  const pressHandlerChatbot = () => {
    navigation.navigate('Chatbot')
  }

  const pressHandlerQuiz = () => {
    navigation.navigate('Quiz')
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      navigation.navigate('SignIn')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.helloText}>Hello, </Text>
        <Pressable style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutButtontextView}>Sign Out</Text>
        </Pressable>
      </View>

      <View>
        <View>
          <Pressable style={styles.quizbuttonStyle} onPress={pressHandlerQuiz}>
            <Text style={styles.quizbuttontextView}>Quiz</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.quizbuttonStyle2} onPress={pressHandlerQuiz}>
            <Text style={styles.quizbuttontextView}>Quiz2</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.chatbuttonStyle} onPress={pressHandlerChatbot}>
            <Entypo name="chat" style={styles.iconStyle} />
          </Pressable>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  helloText: {
      top: 20,
      left: -150,
      fontSize: 20,
      fontWeight: "800",

  },

  signOutButton: {
    top: -10,
    left: 150,
    backgroundColor: "#007BEB",

    width: 70,
    height: 40,
    borderRadius: 10,
    elevation: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  signOutButtontextView: {
    top: 0,
    fontSize: 14,
    color: "#fff",
    fontWeight: "800",
  },

  quizbuttonStyle: {
    top: 20,
    left: -100,
    backgroundColor: "#007BEB",

    width: 180,
    height: 200,
    borderRadius: 10,
    elevation: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  quizbuttontextView: {
    top: 0,
    fontSize: 24,
    color: "#fff",
  },

  quizbuttonStyle2: {
    top: -180,
    left: 100,
    backgroundColor: "#007BEB",

    width: 180,
    height: 200,
    borderRadius: 10,
    elevation: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  iconStyle: {
    left: 15,
    fontSize: 40,
    color: "#fff",
  },

  chatbuttonStyle: {
    top: 160,
    left: 200,
    backgroundColor: "#007BEB",

    width: 70,
    height: 70,
    borderRadius: 100,
    elevation: 5,

    alignContent: "center",
    justifyContent: "center",
  },

});
