const {googleApiKey, tableId} = require("../constants/constants");

const {GoogleSpreadsheet} = require('google-spreadsheet');

const getDataFromSpreadsheet = async () => {
    const doc = new GoogleSpreadsheet(tableId);
    doc.useApiKey(googleApiKey);

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    const returnObject = {};
    const keys = rows[1]._sheet.headerValues;

    for (let i = 1; i < rows.length; i++) {
        const currentObject = {};
        for (let j = 0; j < keys.length; j++) {
            currentObject[keys[j]] = rows[i][keys[j]];
        }
        returnObject[currentObject.id] = currentObject;
    }
    return returnObject;
};

module.exports = {getDataFromSpreadsheet};
