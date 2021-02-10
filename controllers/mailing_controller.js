const { dataParcer } = require("../helpers/dataParcer");
const { FirebasePublisher } = require("../helpers/firebaseHelper");
const { VKPublisher } = require('../helpers/vkHelper');
const { FBPublisher } = require('../helpers/fbHelper');
const { fbPageId } = require('../constants/constants');

const get_data = (req, res) => {
    const dataToPost = dataParcer(req.body);
    if (req.body.fb === 'on') {
        console.log('fb');
        const publisherFB = new FBPublisher();
        publisherFB.sendPost(dataToPost, fbPageId)
    }
    if (req.body.vk === 'on') {
        console.log('vk');
        const publisherVK = new VKPublisher();
        publisherVK.sendPost(dataToPost);
    }
    if (req.body.firebase === 'on'){
        console.log('firebase');
        const publisherFirebase = new FirebasePublisher();
        publisherFirebase.sendPost(dataToPost);
    }
    console.log(req.body);
    res.end();
};

module.exports = { get_data };
