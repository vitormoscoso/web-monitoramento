# Septic Tank Level Monitoring System

## Overview
This project is a web-based application designed to monitor and display the levels of a septic tank using ultrasonic sensor data. The application retrieves data stored in Firebase Firestore, presenting real-time measurements as well as historical data. It features a user authentication system, allowing secure access to the data.

## Features
- **Real-Time Data Visualization**: Displays the current level measured by the ultrasonic sensor in the septic tank.
- **Historical Data Review**: Users can review past measurements to analyze trends over time.
- **Secure Authentication**: Utilizes Firebase Authentication to manage user access, ensuring that data is protected and only accessible to authorized users.
- **Responsive Design**: The site is fully responsive, providing an optimal viewing experience across a wide range of devices.

## Technologies Used
- **Firebase Firestore**: For storing and retrieving sensor data.
- **Firebase Authentication**: For managing user login functionality.
- **ReactTS/Vite**: For frontend development.

## Getting Started

### Prerequisites
- A Firebase project for storing sensor data and managing authentication.
- Node.js and npm installed on your machine.

### Setup
1. Clone the repository to your local machine:
```bash
git clone https://github.com/vitormoscoso/web-monitoramento.git
```
2. Navigate to the project directory:
```bash
cd web-monitoramento
```
3. Install the necessary dependencies:
```bash
npm install
```
4. Set up your Firebase project details in a `.env` file at the root of the project directory.

### Running the Application
1. Start the application:
```bash
npm start
```
2. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions to this project are welcome. Please feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
