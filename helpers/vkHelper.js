
const VK = require('vksdk');
const { tokens, vkLogInData } = require('../constants/constants');

class VKPublisher {
    constructor() {
        this.VK = new VK(vkLogInData);
        this.VK.on('serverTokenReady', (_o) => {
            this.VK.setToken(_o.access_token);
        });
        this.VK.setSecureRequests(true);
        this.VK.setToken(tokens.VKAccessToken);
    }

    sendPost(data) {
        console.log('posting...');
        try {
            this.VK.request('wall.post', {
                owner_id: '13171257',
                message: data.message,
                attachments: data.link,
                access_token: tokens.VKAccessToken,
            },
                (response) => {
                    console.log(`VK ${response}`);
                    console.log(response.error)
                });
        } catch (error) {
            console.error(error.title);
        }
    }
}
// const VKpublisher = new VKPublisher();
module.exports = { VKPublisher };
