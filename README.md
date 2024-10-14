# Feast Station

## Deployment

The backend and frontend are deployed separately using Vercel:

- **Backend URL**: https://server4feast.vercel.app
- **Frontend URL**: https://feast-station.vercel.app/
<img width="1440" alt="Screenshot 2024-10-14 at 19 13 14" src="https://github.com/user-attachments/assets/5be93bf8-96b1-486d-bc0e-9856f9c47bb3">

Feast Station is a full-stack application for a fictional online restaurant. The project consists of a React-based frontend and an Express.js backend, both deployed independently on Vercel.

## Project Structure

The project is organized into two main folders:

- **app/**: Contains the frontend code built with React.
- **server/**: Contains the backend API built with Express.js.

## Features

- **Frontend**: A React-based UI that displays different food items available for ordering, along with their descriptions and prices.
- **Backend**: A REST API built with Express.js that serves the list of food items.

## Technology Stack

- **Frontend**: React  
- **Backend**: Node.js with Express
- **Deployment**: Vercel (both frontend and backend)

## Setup Instructions

### Prerequisites

- Node.js (>=14.x)
- NPM or Yarn
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saksham11kc/feast-station.git
   cd feast-station
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd app
     npm install
     ```
   - For the backend:
     ```bash
     cd ../server
     npm install
     ```

3. **Run the Backend**:
   ```bash
   cd server
   npm start
   ```
   The backend will start on `http://localhost:9000`.

4. **Run the Frontend**:
   ```bash
   cd ../app
   npm start
   ```
   The frontend will start on `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the `app` folder to manage the API base URL:

```
REACT_APP_BASE_URL=https://server4feast.vercel.app
```



To deploy on Vercel:
- Make sure you are logged in to the Vercel CLI.
- Navigate to the `server` and `app` directories separately and run `vercel` to deploy.

## How to Use

Visit the frontend deployment URL to view and interact with the food menu. The app communicates with the backend API to fetch the latest data.



## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

