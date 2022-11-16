import React from "react";
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Chatbot')
  }


  return (
    <View style={styles.container}>

      <Text style={styles.textView}>Home screen!! Hi</Text>
     
      <Pressable style={styles.chatbuttonStyle} onPress={pressHandler}>
        <Entypo name="chat" style={styles.iconStyle} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  textView: {
    top: 300,
    fontSize: 20,
  },

  chatbuttonStyle: {
    top: 610,
    left: 150,
    backgroundColor: "#007BEB",
    
    width: 70,
    height: 70,
    borderRadius: 100,
    elevation: 5,

    alignContent: "center",
    justifyContent: "center",
  },
    
  iconStyle: {
    left: 15,
    fontSize: 40,
    color: "#fff",
  }
});
