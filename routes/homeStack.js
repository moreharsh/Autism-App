import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Chatbot from "../screens/chatbot";

const screens = {
    Home: {
        screen: Home
    },
    Chatbot: {
        screen: Chatbot
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);