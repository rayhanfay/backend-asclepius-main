# Backend API for Cancer Prediction

Welcome to the **Cancer Prediction API**, a backend service designed to perform image classification using TensorFlow and store prediction results in Google Firestore. The API supports both real-time predictions and a history retrieval feature. It's deployed on Google Cloud Run, ensuring scalability and reliability.
---

## Overview
This API predicts whether an uploaded image indicates cancerous or non-cancerous tissue using a TensorFlow model. It’s a cloud-based solution that efficiently manages requests and saves prediction histories for easy retrieval.

## Features
- **Image Classification**: Utilizes a TensorFlow model to classify images as 'Cancer' or 'Non-cancer'.
- **Firestore Integration**: Stores prediction results, including timestamp and suggestion, for future access.
- **Health Check**: Configured to ensure container health and reliability in Cloud Run.
- **Error Handling**: Provides clear feedback on incorrect inputs or prediction failures.

## Technology Stack
- **Node.js**: Backend runtime environment.
- **Hapi.js**: Framework for building robust RESTful APIs.
- **TensorFlow.js**: Library for image classification and model inference.
- **Google Cloud Firestore**: Database for storing prediction histories.
- **Google Cloud Run**: Platform for deploying and running containers.
- **Docker**: Containerization of the application for easy deployment.

## Setup and Installation

### Prerequisites
- **Node.js** (v18 or later)
- **npm** (package manager)
- **Docker** (for containerization)

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/backend-api.git
   cd backend-api

2. **Install dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
   1. **Create a `.env` file** in the root directory.
   2. **Add the following variables**:
   ```env
   PORT=8080
   MODEL_URL=https://storage.googleapis.com/your-model-url/model.json
   GOOGLE_APPLICATION_CREDENTIALS=./config/service-account.json

4. **Running Locally**:
   You can run the API locally to test its functionality:
   ```bash
   npm start

5. **Deployment**:
   The application is containerized using Docker and deployed on Google Cloud Run.
    ### Steps to Deploy on Google Cloud Run
    1. **Build Docker Image**:
     ```bash
     docker build -t backend-api .
     ### Tag the Docker Image
      ```bash
      docker tag backend-api gcr.io/YOUR_PROJECT_ID/backend-api
     ### Push the Image to Google Container Registry
      ```bash
      docker push gcr.io/YOUR_PROJECT_ID/backend-api
     ### Deploy the Container to Google Cloud Run
      ```bash
   gcloud run deploy backend-api \
     --image gcr.io/YOUR_PROJECT_ID/backend-api \
     --platform managed \
     --region asia-southeast2 \
     --allow-unauthenticated \
     --timeout=300s


   
