# Cancer Prediction API 🚀
Welcome to the **Cancer Prediction API**, a backend service designed for image classification using TensorFlow and integrated with Google Firestore to store prediction histories. Deployed on Google Cloud Run, this API provides reliable real-time cancer detection.

## 🌟 Features
- **Image Classification**: Detects if uploaded images are cancerous or non-cancerous using a TensorFlow model.
- **Firestore Integration**: Stores each prediction's result, timestamp, and suggestions for easy retrieval.
- **Health Check**: Configured for reliability in Cloud Run.
- **Error Handling**: Provides detailed feedback on errors for better usability.

## 💻 Technology Stack
- **Node.js**: Backend runtime environment.
- **Hapi.js**: RESTful API framework.
- **TensorFlow.js**: For image classification and inference.
- **Google Cloud Firestore**: Database for prediction history.
- **Google Cloud Run**: Scalable containerized deployment.
- **Docker**: For containerization and easy deployment.

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18+)
- **npm** (package manager)
- **Docker** (for containerization)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/backend-api.git
   cd backend-api

2. **Install dependencies**:
   ```bash
   npm install
   
3. **Run Locally**:
   ```bash
   npm start

## 🚀 Deploying on Google Cloud Run
To deploy the application on Google Cloud Run, follow these steps:
1. **Build Docker Image**:
   ```bash
   docker build -t backend-api .

2. **Tag the Docker Image**:
   ```bash
   docker tag backend-api gcr.io/YOUR_PROJECT_ID/backend-api
   
3. **Push the Image to Google Container Registry**:
   ```bash
   docker push gcr.io/YOUR_PROJECT_ID/backend-api

4. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy backend-api \
   --image gcr.io/YOUR_PROJECT_ID/backend-api \
   --platform managed \
   --region asia-southeast2 \
   --allow-unauthenticated \
   --timeout=300s

## 📋 API Endpoints

### 1. POST /predict

- **Description**: Classifies an uploaded image as 'Cancer' or 'Non-cancer'.
- **Request**: Accepts `multipart/form-data` with an image file (max size: 1MB).
- **Response**:

  ```json
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

### 2. GET /predict/histories

- **Description**: Retrieves all prediction histories from Firestore.
- **Response**:

  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "unique-id",
        "history": {
          "result": "Cancer",
          "createdAt": "timestamp",
          "suggestion": "Segera periksa ke dokter!"
        }
      }
    ]
  }

## ⚙️ Environment Variables

- `PORT`: Server port number.
- `MODEL_URL`: URL of the TensorFlow model in Google Cloud Storage.
- `GOOGLE_APPLICATION_CREDENTIALS`: Path to the Firestore service account JSON.

## 🚀 Future Improvements

- **Model Optimization**: Enhance model accuracy.
- **Detailed Error Feedback**: Provide better error messages for invalid image formats.
- **Scalability**: Explore caching for frequently used predictions.
