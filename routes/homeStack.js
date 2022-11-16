import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../screens/signin";
import Home from "../screens/home";
import Chatbot from "../screens/chatbot";
import Quiz from "../screens/quiz";

const screens = {
    SignIn: {
        screen: SignIn
    },
    Home: {
        screen: Home
    },
    Chatbot: {
        screen: Chatbot
    },
    Quiz: {
        screen: Quiz
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);