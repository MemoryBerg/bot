const { dataParcer } = require("../helpers/dataParcer");
const { FirebasePublisher } = require("../helpers/firebaseHelper");
const { getDataFromSpreadsheet } = require("../helpers/googleSpreadsheetHelper");
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

const get_data_from_table = async () => {
    await getDataFromSpreadsheet()
};

const send_table_data_to_firebase = async () => {
    const data = await getDataFromSpreadsheet();
    const publisherFirebase = new FirebasePublisher();
    publisherFirebase.sendPost(data);
};

module.exports = { get_data, get_data_from_table, send_table_data_to_firebase };
