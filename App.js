import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../chat-app-rn/screens/LoginScreen";
import ChatScreen from "../chat-app-rn/screens/ChatScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(navigator);
