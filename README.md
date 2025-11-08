# Learning Activity App

A cross-platform React Native application built with Expo that displays a list of learning activities for online courses. Works seamlessly on Web, iOS, and Android from a single codebase.

## Features

- 📱 **Cross-Platform**: Single codebase for Web, iOS, and Android
- 🎨 **Modern UI**: Clean, responsive design using React Native Paper (Material Design 3)
- 🌓 **Theme Toggle**: Built-in light and dark mode support
- 🔍 **Smart Filters**: Filter activities by type and status
- 📊 **Activity Types**: Online Classes, Assignments, Quizzes, and Discussions
- ✅ **Status Tracking**: Not Started, In Progress, and Completed states
- 🎯 **Action Buttons**: Context-aware Start/Continue/Review buttons
- 📝 **Rich Details**: Shows instructor, date, time, duration, scores, and more
- ⚡ **Performant**: Optimized with FlatList and useMemo for smooth scrolling

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and build tools
- **React Native Paper** - Material Design UI components
- **Jest & React Testing Library** - Testing framework
- **JavaScript (ES6+)** - No TypeScript for simplicity

## Project Structure

```
learning-activity-app/
├── App.js                      # Entry point with theme provider
├── components/
│   ├── ActivityCard.js         # Individual activity card component
│   ├── FilterBar.js            # Type and status filter component
│   └── ThemeToggle.js          # Light/dark mode toggle button
├── screens/
│   └── ActivityListScreen.js  # Main screen with activity list
├── data/
│   └── mockActivities.js      # Mock activity data
├── tests/
│   └── ActivityCard.test.js   # Component tests
├── package.json                # Dependencies and scripts
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
└── README.md                   # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Expo CLI** - Will be installed as dependency
- **Expo Go App** (for mobile testing) - Download from App Store or Google Play

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\ADMIN\Desktop\GL Project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Application

### Web (Recommended for Quick Start)

Run the app in your web browser:

```bash
npm run web
```

The app will open automatically at `http://localhost:8081` or `http://localhost:19006`.

### Mobile (iOS/Android)

#### Option 1: Using Expo Go (Fastest for Development)

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Scan the QR code:**
   - **iOS**: Open the Camera app and scan the QR code
   - **Android**: Open the Expo Go app and scan the QR code

#### Option 2: Using Emulator/Simulator

1. **For Android (requires Android Studio):**
   ```bash
   npm run android
   ```

2. **For iOS (requires Xcode, macOS only):**
   ```bash
   npm run ios
   ```

## Running Tests

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## Building for Production

### Web Build

```bash
npx expo export --platform web
```

The build output will be in the `dist/` directory, ready to deploy to any static hosting service.

### Mobile Build (EAS Build - Recommended)

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo:**
   ```bash
   eas login
   ```

3. **Configure the build:**
   ```bash
   eas build:configure
   ```

4. **Build for Android:**
   ```bash
   eas build --platform android
   ```

5. **Build for iOS:**
   ```bash
   eas build --platform ios
   ```

### Local Build (Alternative)

**For Android APK:**
```bash
npx expo build:android -t apk
```

**For iOS IPA (macOS only):**
```bash
npx expo build:ios -t archive
```

## Key Features Explained

### Activity Card
Each activity displays:
- **Type Icon & Chip**: Visual indicator (video for classes, clipboard for quizzes, etc.)
- **Status Badge**: Color-coded status (gray for not started, orange for in progress, green for completed)
- **Details Section**: Date, time, instructor, duration, scores, etc.
- **Action Button**: Context-aware button (Start/Continue/Review)

### Filter System
- **Type Filter**: All Types, Online Class, Assignment, Quiz, Discussion
- **Status Filter**: All Status, Not Started, In Progress, Completed
- Filters update the list in real-time

### Theme Support
- Toggle between light and dark themes using the icon in the app bar
- Uses Material Design 3 color system
- Persists visual consistency across theme changes

## Design Decisions & Tradeoffs

### ✅ Choices Made

1. **React Native Paper over NativeBase**
   - Better Material Design 3 compliance
   - More active development and community support
   - Excellent web support out of the box

2. **Functional Components with Hooks**
   - Modern React approach
   - Better performance with useMemo
   - Cleaner, more maintainable code

3. **FlatList for Performance**
   - Virtualization for large lists
   - Better memory management
   - Smooth scrolling on all platforms

4. **Local State Management**
   - No Redux/MobX needed for this scope
   - Simpler code, easier to understand
   - useState and useMemo sufficient

5. **Mock Data in JS File**
   - No API setup required
   - Easy to modify and extend
   - Fast development iteration

### ⚖️ Tradeoffs

1. **No Persistent Storage**
   - Filter selections don't persist across app restarts
   - Could add AsyncStorage for state persistence if needed

2. **No Navigation Library**
   - Single-screen app doesn't need React Navigation
   - Easy to add if more screens are needed

3. **Basic Testing**
   - Unit tests cover main component
   - No integration or E2E tests (could add Detox)

4. **No Animation Library**
   - Using built-in animations only
   - Could add Reanimated for advanced animations

5. **Web Responsiveness**
   - Responsive but not optimized for desktop layouts
   - Could add max-width containers for large screens

## Responsive Design Approach

- **Flexible Layouts**: Uses flexbox for fluid layouts
- **ScrollView for Filters**: Horizontal scrolling prevents overflow
- **Card-based UI**: Adapts well to different screen sizes
- **Platform-specific Tweaks**: ScrollView indicators only on web
- **Touch-friendly**: Large tap targets (48x48 minimum)

## Performance Optimizations

1. **FlatList Virtualization**: Only renders visible items
2. **useMemo Hook**: Memoizes filtered activities list
3. **React Native Paper**: Optimized Material Design components
4. **Minimal Re-renders**: Proper component structure
5. **Efficient Filtering**: Client-side filtering with useMemo

## Common Issues & Solutions

### Issue: Metro bundler error
**Solution:** Clear cache and restart
```bash
npm start -- --clear
```

### Issue: Dependencies not installing
**Solution:** Delete node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Web app not loading
**Solution:** Check if port 8081 or 19006 is already in use, or try:
```bash
npm run web -- --port 8082
```

### Issue: Expo Go not connecting
**Solution:** Ensure your phone and computer are on the same Wi-Fi network

## Future Enhancements

- [ ] Add search functionality
- [ ] Implement calendar view
- [ ] Add notifications for upcoming activities
- [ ] Include progress tracking dashboard
- [ ] Add user authentication
- [ ] Integrate with real backend API
- [ ] Add offline support with AsyncStorage
- [ ] Implement deep linking
- [ ] Add multi-language support

## Contributing

This is a demo project for interview purposes. Feel free to fork and enhance!

## License

MIT License - Free to use for educational and commercial purposes

## Contact

For questions about this project, please refer to the `interview_prep.md` file for common interview questions and technical details.

---

**Built with ❤️ using React Native and Expo**

