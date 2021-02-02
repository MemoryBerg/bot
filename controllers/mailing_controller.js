const { dataParcer } = require("../helpers/dataParcer");
const { VKPublisher } = require('../helpers/vkHelper');
const { FBPublisher } = require('../helpers/fbHelper');
const { fbPageId } = require('../constants/constants')

const get_data = (req, res) => {
    const dataToPost = dataParcer(req.body);
    if (req.body.fb === 'on') {
        console.log('fb')
        const publishFB = new FBPublisher();
        publishFB.sendPost(dataToPost, fbPageId)
    }
    if (req.body.vk === 'on') {
        console.log('vk')
        const publishVK = new VKPublisher();
        publishVK.sendPost(dataToPost);
    }
    console.log(req.body)
    res.end();
}
module.exports = { get_data };