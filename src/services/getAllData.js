const { Firestore } = require('@google-cloud/firestore');
const serviceCredentials = require('../config/service-account.json');

const firestoreDB = new Firestore({
    projectId: 'submissionmlgc-rayhanfay',
    credentials: serviceCredentials
});

async function fetchAllRecords() {
    const predictionsCollection = firestoreDB.collection('predictions');
    const records = await predictionsCollection.get();
    return records.docs;
}

module.exports = fetchAllRecords;