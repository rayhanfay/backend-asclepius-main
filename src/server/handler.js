const runPrediction = require('../services/inferenceService');
const crypto = require('crypto');
const saveData = require('../services/storeData');
const fetchAllRecords = require('../services/getAllData');

async function predictHandler(request, h) {
    const { image } = request.payload;
    const { model } = request.server.app;

    const { result, recommendation } = await runPrediction(model, image);
    const predictionId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    const entry = {
        id: predictionId,
        result,
        recommendation,
        createdAt: timestamp
    };

    await saveData(predictionId, entry);

    const response = h.response({
        status: 'success',
        message: 'Prediction completed successfully',
        data: entry
    });
    response.code(201);
    return response;
}

async function getPredictionHistoriesHandler(request, h) {
    const records = await fetchAllRecords();

    const formattedRecords = records.map((doc) => ({
        id: doc.id,
        history: {
            result: doc.data().result,
            createdAt: doc.data().createdAt,
            recommendation: doc.data().recommendation,
            id: doc.id
        }
    }));

    const response = h.response({
        status: 'success',
        data: formattedRecords
    });
    response.code(200);
    return response;
}

module.exports = { predictHandler, getPredictionHistoriesHandler };
