const { Firestore } = require('@google-cloud/firestore');
const serviceCredentials = require('../config/service-account.json');

const firestoreDB = new Firestore({
    projectId: 'submissionmlgc-rayhanfay',
    credentials: serviceCredentials
});

async function saveData(id, entry) {
    const predictionsCollection = firestoreDB.collection('predictions');
    return predictionsCollection.doc(id).set(entry);
}

module.exports = saveData;