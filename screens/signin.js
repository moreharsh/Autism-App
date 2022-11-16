import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';


export default function SignIn({ navigation }) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    GoogleSignin.configure({
        webClientId: '149777463064-0pnmur68pdt75a4d7d1dsg26rd5pdape.apps.googleusercontent.com',
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in.then((user) => {
            // console.log(user);
            navigation.navigate('Home')
        }).catch((error) => {
            console.log(error);
        })
    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await auth().signOut();
        } catch (error) {
            console.log(error)
        }
    }

    if (initializing) return null;

    if (!user) {
        return (
            <View style={styles.container}>

                <Text style={styles.textView}>Welcome</Text>

                <GoogleSigninButton style={styles.signInButton} onPress={onGoogleButtonPress}></GoogleSigninButton>
            </View>
        )
    }

    return (
        navigation.navigate('Home')
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textView: {
        marginTop: 100,
        fontSize: 32,
        fontWeight: "800",
    },

    signInButton: {
        width: 300,
        height: 65,
        marginTop: 200,
    },
});
