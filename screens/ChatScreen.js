import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { withNavigation } from "react-navigation";
import { GiftedChat } from "react-native-gifted-chat";
import database from "../db.js";

class ChatScreen extends Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    this.state = {
      messages: [],
    };
  }

  get user() {
    return {
      _id: database.uid,
      name: this.props.navigation.state.params.name,
    };
  }

  componentDidMount() {
    database.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillMount() {
    database.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={database.send}
        user={this.user}
      />
    );

    if (Platform.OS === "android") {
      return (
        <View
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </View>
      );
    }
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({});

export default withNavigation(ChatScreen);
