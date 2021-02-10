const firebase = require('firebase');
const { firebaseConfig } = require("../constants/constants");

class FirebasePublisher {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.databaseRef = firebase.database().ref();
    }
    sendPost(postData) {
        // Get a key for a new Post.
        const newPostKey = this.databaseRef.child('Test').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/Test/' + newPostKey] = postData.message;
        return this.databaseRef.update(updates);
    }
}

module.exports = { FirebasePublisher };
