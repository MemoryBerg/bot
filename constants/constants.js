// FB token till march 20 2021
const tokens = {
    FBAccessToken: 'EAAwi2M80SxUBAKZAjYztLQNYHBKcZA1COXMY9xwmt5ksU4qGnnXfpSISlg6JhyqzmRKfomG6RuZBvLUjFNO4TSeVRpTPhJ7lWjbFCNOWAFnf7ox8wSShi3s0WouuunsquhuI2gDgiA07uRfxU1A0JSfTffvWnGFoemGgRTYZC4v895aMvwWb',
    VKAccessToken: '8791014ee70363b02a7ca43cc2f8e3ab98fed4284b13843855ba7e2b940b1747f961af74f7af8c752562d',
};
const vkLogInData = {
    appId: 7657554,
    appSecret: '4brhTVg3BynHLG9OrVNs',
    language: 'ru',
};

const fbPageId = 104269951499293;
const fbAppId = 3416014305118997;
const fbUniceIdentifier = 'upload:MTphdHRhY2htZW50OjQ2YTk3YWFiLWE5NTMtNDkwOS1hYWRlLTM3OThjZTI1ZGY0ZT8=?sig=ARYyrTvtGfJZzwJygBQ';

const firebaseConfig = {
    apiKey: 'AIzaSyDeWaDvXQm1Jbkn9-h1hNe_QTfmG7xOXd0',
    authDomain: 'psychonica-3a0ea.firebaseapp.com',
    databaseURL: 'https://psychonica-3a0ea-default-rtdb.firebaseio.com',
    projectId: 'psychonica-3a0ea',
    storageBucket: 'psychonica-3a0ea.appspot.com',
    messagingSenderId: '247277760058',
    appId: '1:247277760058:web:460a22f4d03d17c8850f03',
    measurementId: 'G-1VSZWRG2XD',
};

module.exports = {
    tokens,
    vkLogInData,
    fbPageId,
    fbAppId,
    firebaseConfig,
    fbUniceIdentifier
};
