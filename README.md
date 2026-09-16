# Idea Vault 

Idea Vault is a lightweight, cross-platform mobile application designed to seamlessly log and organize personal notes. Built with React Native and Expo, it features a snappy, UI and two-way data synchronization.

## Tech Stack
* **Frontend:** React Native, Expo, TypeScript
* **Backend:** Firebase Realtime Database
* **Testing:** Expo Go (iOS), Android Emulator

## Features
* **Cross-Platform:** Runs natively on both iOS and Android from a single codebase.
* **Cloud Sync:** Real-time data storage and deletion via Firebase REST API integrations.
* **Instant UI Updates:** Optimistic local state rendering for a responsive user experience.

## Authors
* **Nicholas Reed** - *Primary Developer*
* **Joseph Ruth** - *Collaborator (UI Customization)*

## Instructions to Run

### Prerequisites
* Download the **Expo Go** app on an iOS or Android device.
* Ensure Node.js is installed on your computer.

### Setup Steps
1. Clone this repository:
   `git clone [Insert the Repo URL Here]`
2. Navigate into the project directory:
   `cd cs4261-first-programming-assignment`
3. Install dependencies:
   `npm install`
4. Start the Expo development server:
   `npx expo start`
5. Scan the QR code generated in the terminal using the Expo Go app (or the native Camera app on iOS) to run the application on a physical device.

## Backend Service
* **Database:** Firebase Realtime Database
* **API URL:** `https://cs4261-firstprogramming-default-rtdb.firebaseio.com/`

## References & Resources
* **Expo Documentation:** Used to understand the `npx create-expo-app` boilerplate and configure the local development server. 
* **React Native Core Components:** Referenced for implementing `<TextInput>`, `<TouchableOpacity>`, and `<FlatList>` to capture and display user input.
* **Firebase Realtime Database REST API:** Used to configure standard HTTP `fetch` requests for saving and deleting data without requiring native SDK installations.