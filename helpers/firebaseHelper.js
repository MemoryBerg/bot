const firebase = require('firebase');
const { firebaseConfig } = require("../constants/constants");
const _ = require("lodash");

class FirebasePublisher {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.databaseRef = firebase.database().ref();
    }
    async sendPost(postData) {
        // Get a key for a new Post.
        // firebase.database().ref('/Test/').remove();
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        const filteredData = this.validateData(postData);
        // this.databaseReft.update(updates)
        _.forEach(filteredData, (item) => {
            const newPostKey = this.databaseRef.child('Articles').push().key;
            if(item) updates['/Articles/' + newPostKey] = item;
        });
        return this.databaseRef.update(updates);
    }

    validateData(data){
        return _.map(data, (item) => {
            if(item.id && item.titleText && item.descriptionText && item.descriptionTextHTML && item.imageSrc && item.sex && item.author){
                return item
            }
        })
    }
}

module.exports = { FirebasePublisher };
