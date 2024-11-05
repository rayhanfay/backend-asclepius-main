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
