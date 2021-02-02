const dataParcer = (data) => {
    const obj = {};
    obj.message = data.message;
    obj.link = data.imgUrl;
    return obj;
}

module.exports = { dataParcer }