CineVault is a React Native movie browsing application that displays movies with search, infinite scroll, pull-to-refresh, and favorites functionality.

## 📐 Architecture Overview

CineVault follows a feature-based modular architecture for scalability and maintainability.
src/
├── app/ → Redux store & configuration
├── components/ → Reusable UI components
├── constants/ → Colors, images, app constants
├── navigation/ → Stack & Tab navigation setup
├── screens/ → Feature screens (Dashboard, Details, Favourite)
├── services/ → RTK Query API + Redux slices

## Architecture Pattern

Redux Toolkit (RTK) for global state management
RTK Query for API data fetching & caching
React Navigation (Stack + Bottom Tabs) for navigation
Redux Persist for persistent favorites storage
Memoized filtering using useMemo
Clean separation between:
1.UI Components
2.Business Logic
3.API Layer
4.Navigation

## 📚 Libraries Used & Purpose

-Core

1. react – UI library . Core UI library for building declarative components using hooks like useState, useEffect, and useMemo.
2. react-native – Mobile framework.Provides native components (View, Text, FlatList, etc.) to build cross-platform mobile apps using JavaScript.

-Navigation

1. react-navigation/native - Core navigation container that manages navigation state and linking.
2. react-navigation/native-stack -Provides native stack navigation (used for Dashboard → DetailsScreen).it has good native performance,Smooth transitions,Proper screen history handling
3. react-navigation/bottom-tabs - better tab navigator than most other packages
4. react-native-screens- Optimizes memory usage by using native navigation primitives.
   Without it → screens stay mounted unnecessarily.
5. -native-safe-area-context - Handles device safe areas (notches, status bars, rounded corners).
   Prevents UI overlap issues.
6. react-native-gesture-handler -Required by React Navigation.
   Improves gesture performance (swipe back, tab gestures).

Used for Stack navigation and Bottom Tab navigation.

State Management

1. reduxjs/toolkit - it has modern redux immplementation with simplified sliced creation,Built-in Immer for immutable updates and RTK Query integration
2. react-redux - Connects React components to Redux store using:useSelector and useDispatch
3. redux - Core Redux dependency (automatically required by RTK).
4. redux-persist - Persists Redux state (favorites) to device storage.Without it:Favorites reset on app restart.
5. react-native-async-storage/async-storage - Storage engine for Redux Persist.
   Used for:
   1.Global state
   2.Favorites management
   3.Persisting favorites across app restarts

🌐 Data Fetching
RTK Query (part of Redux Toolkit) = I used it instead of Axios/Fetch Because it provides:Automatic caching,Loading state management,Error handling,Refetching,Data memoization,Cleaner than writing custom async thunks.

UI & Icons
react-native-vector-icons/ionicons
react-native-vector-icons/fontawesome6
Used for tab icons and UI icons.
Used because they have the most uptodate icons and lots of icons and are maintained regularly

Media & Video
react-native-youtube-iframe
react-native-webview

Used for trailer playback functionality.I wanted to use the react-native-video but it cant play youtube videos so i had to use react-native-youtube-iframe.

Animation & Performance
react-native-reanimated
react-native-worklets
react-native-nitro-modules

Used for smoother animations and performance optimization.Best animation package to use.

## 🌐 API Source

This project uses the:
IMDb Top 250 Movies API

Endpoint:
https://imdb236.p.rapidapi.com/api/imdb/top250-movies
The API returns all 250 movies at once.

## ✨ Features

🔍 Search movies (client-side filtering)
🔄 Pull-to-refresh
❤️ Add / Remove favorites
💾 Persistent favorites using Redux Persist
🎬 Movie details screen
🎥 Trailer playback (YouTube)
📱 Bottom tab navigation
🎞 Animated splash screen
🧠 Optimized rendering with memoization

## 🚀 Setup & Run Locally

1️⃣ Clone the repository
git clone https://github.com/prasant1123/cinevault.git
cd CineVault

2️⃣ Install dependencies
Using yarn: yarn

3️⃣ Start Metro bundler
npx react-native start

4️⃣ Run on Android
npx react-native run-android

Requirements:
Android Studio installed
Emulator running or physical device connected

5️⃣ Run on iOS (Mac only)
cd ios
pod install
cd ..
npx react-native run-ios

## 🏗 Technical Highlights

1.Type-safe navigation using NativeStackScreenProps
2.Modular navigation structure
3.Centralized API layer with RTK Query
4.Persisted Redux store
5.Optimized FlatList usage
6.Clean component reusability
7.Structured project organization
