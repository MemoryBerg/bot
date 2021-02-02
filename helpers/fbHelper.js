const FB = require('fb');
const { tokens } = require('../constants/constants');

class FBPublisher {
    constructor() {
        FB.setAccessToken(tokens.FBAccessToken);
    }

    sendPost(postData, publicPageId) {
        try {
            FB.api(
                `/${publicPageId}/feed`,
                'POST',
                postData,
                (response) => {
                    console.log(response);
                },
            );
        } catch (error) {
            console.error(error.title);
        }
    }
}

module.exports = { FBPublisher };