# Idea Vault - First Programming Assignment

**Developer:** Nicholas Reed
**Course:** CS 4261 

## Overview
Idea Vault is a lightweight mobile application inspired by the quick-capture functionality of workspace tools like Notion, designed to seamlessly log and organize personal notes. 

I chose this project to gain hands-on experience with modern mobile development using React Native and Expo, moving away from heavy IDE setups to a faster, cross-platform workflow. The goal was to build a functional single-screen interface that dynamically handles user input, updates local state, and connects to a cloud database.

## Instructions to Run

### Prerequisites
* Download the **Expo Go** app on an iOS or Android device.
* Ensure Node.js is installed on your computer.

### Setup Steps
1. Clone this repository:
   `git clone [Insert Your Repo URL Here]`
2. Navigate into the project directory:
   `cd cs4261-first-programming-assignment`
3. Install dependencies:
   `npm install`
4. Start the Expo development server:
   `npx expo start`
5. Scan the QR code generated in the terminal using the Expo Go app (or the native Camera app on iOS) to run the application on a physical device.

## Backend Service
* **Database:** Firebase Realtime Database
* **API URL:** `[Insert Your Firebase URL Here]`

## References & Resources
* **Expo Documentation:** Used to understand the `npx create-expo-app` boilerplate and configure the local development server. 
* **React Native Core Components:** Referenced for implementing `<TextInput>`, `<TouchableOpacity>`, and `<FlatList>` to capture and display user input.
* **Firebase Realtime Database REST API:** Used to configure standard HTTP `fetch` requests for saving and deleting data without requiring native SDK installations.