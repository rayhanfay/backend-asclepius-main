Backend API for Cancer Prediction
Welcome to the Cancer Prediction API, a backend service designed to perform image classification using TensorFlow and store prediction results in Google Firestore. The API supports both real-time predictions and a history retrieval feature. It's deployed on Google Cloud Run, ensuring scalability and reliability.

Table of Contents
Overview
Features
Technology Stack
Setup and Installation
Running Locally
Deployment
Endpoints
Environment Variables
Error Handling
Future Improvements
Overview
This API predicts whether an uploaded image indicates cancerous or non-cancerous tissue using a TensorFlow model. It’s a cloud-based solution that efficiently manages requests and saves prediction histories for easy retrieval.

Features
Image Classification: Utilizes a TensorFlow model to classify images as 'Cancer' or 'Non-cancer'.
Firestore Integration: Stores prediction results, including timestamp and suggestion, for future access.
Health Check: Configured to ensure container health and reliability in Cloud Run.
Error Handling: Provides clear feedback on incorrect inputs or prediction failures.
Technology Stack
Node.js: Backend runtime environment.
Hapi.js: Framework for building robust RESTful APIs.
TensorFlow.js: Library for image classification and model inference.
Google Cloud Firestore: Database for storing prediction histories.
Google Cloud Run: Platform for deploying and running containers.
Docker: Containerization of the application for easy deployment.
Setup and Installation
Prerequisites
Node.js (v18 or later)
npm (package manager)
Docker (for containerization)
Installation Steps
Clone the repository:

bash
Copy code
git clone https://github.com/username/backend-api.git
cd backend-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
makefile
Copy code
PORT=8080
MODEL_URL=https://storage.googleapis.com/your-model-url/model.json
GOOGLE_APPLICATION_CREDENTIALS=./config/service-account.json
Running Locally
You can run the API locally to test its functionality:

bash
Copy code
npm start
Development Mode: To use nodemon for automatic restarts, use:

bash
Copy code
npm run start:dev
Deployment
The application is containerized using Docker and deployed on Google Cloud Run.

Steps to Deploy on Google Cloud Run
Build Docker Image:

bash
Copy code
docker build -t backend-api .
Push to Container Registry:

bash
Copy code
docker tag backend-api gcr.io/YOUR_PROJECT_ID/backend-api
docker push gcr.io/YOUR_PROJECT_ID/backend-api
Deploy Using gcloud CLI:

bash
Copy code
gcloud run deploy backend-api \
  --image gcr.io/YOUR_PROJECT_ID/backend-api \
  --platform managed \
  --region asia-southeast2 \
  --allow-unauthenticated \
  --timeout=300s
Endpoints
1. POST /predict
Description: Classifies an uploaded image as 'Cancer' or 'Non-cancer'.

Request: multipart/form-data with an image file (max size: 1MB).

Response:

json
Copy code
{
  "status": "success",
  "message": "Model is predicted successfully",
  "data": {
    "id": "unique-id",
    "result": "Cancer",
    "suggestion": "Segera periksa ke dokter!",
    "createdAt": "timestamp"
  }
}
Error Codes:

413: Payload size exceeds 1MB.
400: Prediction failure.
2. GET /predict/histories
Description: Retrieves all prediction histories from Firestore.
Response:
json
Copy code
{
  "status": "success",
  "data": [
    {
      "id": "unique-id",
      "history": {
        "result": "Cancer",
        "createdAt": "timestamp",
        "suggestion": "Segera periksa ke dokter!",
        "id": "unique-id"
      }
    }
  ]
}
Environment Variables
PORT: Port number for the server.
MODEL_URL: URL to the TensorFlow model hosted in Google Cloud Storage.
GOOGLE_APPLICATION_CREDENTIALS: Path to the service account JSON for Firestore.
Error Handling
Custom Error Classes: Implements ClientError and InputError for better error management.
Graceful Handling: Returns informative messages and appropriate HTTP status codes for client errors.
Future Improvements
