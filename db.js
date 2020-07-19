import firebase from "firebase";

class database {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBoGPjNGft8fscY2j0zyynzY4U5w_5VLOo",
        authDomain: "chatapp-fc8a3.firebaseapp.com",
        databaseURL: "https://chatapp-fc8a3.firebaseio.com",
        projectId: "chatapp-fc8a3",
        storageBucket: "chatapp-fc8a3.appspot.com",
        messagingSenderId: "238629028702",
        appId: "1:238629028702:web:87a4271c7425c89e6005cf",
        measurementId: "G-378Z9ZWZ9R",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new database();
