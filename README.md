# Pastel Grid Builder App

## Introduction
This application allows users to create a dynamic grid with draggable square cells, customize grid size, adjust spacing between cells, and change the grid's background color.


## Features
- **Customizable Grid Size**: Users can set the grid dimensions (e.g., 3x3, 4x4, etc.).
- **Adjustable Cell Spacing**: Users can modify the spacing between grid cells.
- **Grid Color Selection**: Users can change the background color of the grid cells.
- **Drag-and-Drop Support**: Cells can be moved within the grid.

## Technologies and Libraries Used
- **React Native**: The primary framework for building the mobile application.
- **@mgcrea/react-native-dnd**: Used to implement the drag-and-drop functionality for grid cells.

## Design Decisions
- **Separation of Logic and UI**: Create a useGrid hook to handle the logic

## Challenges Faced
1. **Searching for and selecting a library to implement the drag-and-drop functionality**:
   - Finding a suitable library that supports drag-and-drop interactions in React Native while maintaining performance and flexibility.
   - Solution: Evaluated multiple libraries and selected @mgcrea/react-native-dnd due to its ease of integration and compatibility with the project.

&emsp;

## 🚀 Getting Started

### 📌 Prerequisites
> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies
```bash
npm install
```
or
```bash
yarn install
```

### 3️⃣ Start the Metro Bundler
```bash
npx react-native start
```

### 4️⃣ Run the App
#### **On Android**
Ensure you have an emulator running or a device connected via USB.
```bash
npx react-native run-android
```

#### **On iOS (Mac only)**
Make sure Xcode is installed.
```bash
npx react-native run-ios
```

## ❌ Troubleshooting
### Metro Bundler Crashes
```bash
rm -rf node_modules && npm install
npx react-native start --reset-cache
```

### Android Build Fails
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

## 📜 License
This project is licensed under the [MIT License](LICENSE).
