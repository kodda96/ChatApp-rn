import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

class LoginScreen extends Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    this.state = {
      name: "",
    };
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={{ marginTop: 64 }}>
          <Image
            source={require("../assets/chat.png")}
            style={styles.image}
          ></Image>
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          ></TextInput>
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Icon name="ios-redo" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
  image: {
    width: 150,
    height: 130,
    alignSelf: "center",
  },
  header: {
    fontWeight: "600",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    paddingHorizontal: 10,
    color: "black",
    fontWeight: "600",
  },
  icon: {
    fontSize: 30,
  },
  continue: {
    width: 70,
    height: 40,
    borderRadius: 70 / 2,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withNavigation(LoginScreen);
