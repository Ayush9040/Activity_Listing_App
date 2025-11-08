# Interview Preparation Guide

This document contains common interview questions related to this project and the tech stack, along with concise, memorable answers.

---

## Questions About This Project

### 1. Walk me through the architecture of your Learning Activity App.

**Answer:**
The app follows a simple component-based architecture:
- **App.js** is the entry point with theme provider and state management for dark mode
- **screens/** contains ActivityListScreen that manages filtering and displays the list
- **components/** has reusable components: ActivityCard, FilterBar, and ThemeToggle
- **data/** contains mock activities in a JavaScript file
- I used FlatList for performance, useMemo to optimize filtering, and React Native Paper for consistent Material Design UI across platforms

### 2. How did you implement cross-platform compatibility?

**Answer:**
I used Expo with React Native, which provides web support out of the box. Key points:
- React Native Paper works on both native and web
- Used Platform.OS for platform-specific tweaks (like scroll indicators)
- Responsive design with flexbox that adapts to different screen sizes
- Same codebase runs on iOS, Android, and web without modifications
- Expo Metro bundler handles bundling for different platforms

### 3. Explain your filtering implementation and why you chose this approach.

**Answer:**
I used **useMemo** to optimize filtering performance:
- Filters are applied client-side on mock data
- useMemo only recalculates when selectedType or selectedStatus changes
- This prevents unnecessary re-renders of the FlatList
- For a production app with large datasets, I'd implement server-side filtering with pagination
- The current approach is perfect for the dataset size and provides instant filtering

### 4. How did you implement the theme toggle feature?

**Answer:**
I implemented a centralized theme system:
- **useState** in App.js manages isDarkMode boolean
- **PaperProvider** receives either MD3LightTheme or MD3DarkTheme
- All components use **useTheme** hook to access current theme colors
- StatusBar adjusts automatically based on theme
- Material Design 3 color tokens ensure consistency across all components

### 5. What performance optimizations did you implement?

**Answer:**
Several key optimizations:
1. **FlatList virtualization** - only renders visible items
2. **useMemo** - memoizes filtered activities to prevent unnecessary calculations
3. **keyExtractor** - stable keys prevent unnecessary re-renders
4. **Functional components** - better performance than class components
5. **React Native Paper** - optimized components with built-in performance features

### 6. How would you add API integration to this app?

**Answer:**
I would:
1. Replace mock data with API calls using **fetch** or **axios**
2. Add **useState** for loading and error states
3. Use **useEffect** to fetch data on mount
4. Implement pagination for large datasets
5. Add pull-to-refresh with FlatList's **refreshControl**
6. Consider **React Query** or **SWR** for caching and state management
7. Move filtering to backend with query parameters

### 7. Why did you choose React Native Paper over NativeBase?

**Answer:**
Three main reasons:
1. **Material Design 3** - Paper implements the latest MD3 spec
2. **Better web support** - seamless web compatibility
3. **Active development** - more frequent updates and better documentation
4. **Community** - larger community and ecosystem

---

## React Native Fundamentals

### 8. What is React Native and how does it differ from React?

**Answer:**
React Native is a framework for building native mobile apps using React:
- Uses native components (View, Text) instead of HTML (div, span)
- Renders to native iOS/Android components via bridge
- JavaScript runs in JavaScriptCore engine
- Can access native APIs and platform features
- Same React principles (components, props, state, hooks)
- Styling uses JavaScript objects, not CSS files

### 9. Explain the difference between View and ScrollView.

**Answer:**
- **View** is a basic container, doesn't scroll, all children render at once
- **ScrollView** renders all children immediately but allows scrolling
- **ScrollView** is good for small lists (< 100 items)
- For large lists, use **FlatList** which virtualizes and only renders visible items
- ScrollView uses more memory as it renders everything upfront

### 10. What is FlatList and why is it better than ScrollView for long lists?

**Answer:**
FlatList is a performant list component:
- **Virtualization**: only renders items currently visible on screen
- **Memory efficient**: removes off-screen items from memory
- **Lazy loading**: items render as you scroll
- Built-in features: pull-to-refresh, infinite scroll, separators
- Best for lists with 100+ items or dynamic data

### 11. What are the main React Native components you use daily?

**Answer:**
Core components:
- **View**: container (like div)
- **Text**: display text (must wrap all text)
- **ScrollView**: scrollable container
- **FlatList**: virtualized list
- **Image**: display images
- **TextInput**: text input field
- **TouchableOpacity**: tappable element
- **Modal**: overlay screens
- **SafeAreaView**: respects device safe areas

### 12. How does styling work in React Native?

**Answer:**
Styling uses JavaScript objects:
- **StyleSheet.create()** for optimized styles
- Properties use camelCase (backgroundColor not background-color)
- No CSS files, styles are JS objects
- Flexbox is default layout (flex-direction: column by default)
- No CSS cascade or inheritance (except Text)
- Platform-specific styles with Platform.select()

### 13. What is the React Native bridge?

**Answer:**
The bridge is the communication layer:
- JavaScript code runs in JavaScriptCore engine
- Native code runs in native threads (Java/Kotlin on Android, Objective-C/Swift on iOS)
- Bridge serializes messages between JS and native
- Asynchronous communication
- **New Architecture** (Fabric & TurboModules) removes bridge for better performance

### 14. Explain useState and useEffect hooks.

**Answer:**
**useState**: manages component state
```javascript
const [count, setCount] = useState(0);
// count is value, setCount updates it, 0 is initial value
```

**useEffect**: handles side effects
```javascript
useEffect(() => {
  // runs after render
  fetchData();
  return () => cleanup(); // cleanup on unmount
}, [dependency]); // re-runs when dependency changes
```

### 15. What is useMemo and when would you use it?

**Answer:**
useMemo memoizes expensive calculations:
```javascript
const filtered = useMemo(() => {
  return items.filter(item => item.active);
}, [items]); // only recalculates when items change
```
Use for:
- Expensive filtering/sorting operations
- Preventing unnecessary recalculations
- Optimizing child component renders
Don't overuse - adds overhead for simple operations

---

## Expo Specific

### 16. What is Expo and why use it over bare React Native?

**Answer:**
Expo is a platform built on React Native:
**Pros:**
- Quick setup, no Xcode/Android Studio needed
- Pre-built native modules (camera, location, etc.)
- Easy testing with Expo Go app
- Over-the-air updates
- Simplified build process with EAS

**Cons:**
- Larger app size
- Limited custom native code (unless using EAS)
- Some limitations with native modules

**When to use:** MVP, prototypes, most apps
**When not to use:** Heavy native customization needed

### 17. What is the difference between Expo Go and EAS Build?

**Answer:**
**Expo Go:**
- Development app for testing
- Has pre-built native modules
- Can't include custom native code
- Fast for development

**EAS Build:**
- Cloud build service for production apps
- Creates actual .apk (Android) or .ipa (iOS)
- Supports custom native code
- Can add any native module
- Required for app store submission

### 18. How do you handle different screen sizes in React Native?

**Answer:**
Several strategies:
1. **Flexbox**: flex properties adapt to screen size
2. **Dimensions API**: get screen width/height
3. **Platform.OS**: platform-specific code
4. **useWindowDimensions**: hook that updates on rotation
5. **Percentage values**: width: '100%'
6. **Media queries (web)**: using react-native-web
7. **SafeAreaView**: handles notches and system UI

---

## React Native Paper

### 19. What is React Native Paper and its advantages?

**Answer:**
React Native Paper is a Material Design component library:
- **Material Design 3** compliant
- **Theming**: built-in light/dark themes
- **Cross-platform**: works on iOS, Android, and web
- **Accessible**: ARIA labels and screen reader support
- **Customizable**: easy to override styles
- **Components**: Button, Card, TextInput, Dialog, etc.

### 20. How does theming work in React Native Paper?

**Answer:**
Paper uses a centralized theme system:
```javascript
const theme = {
  colors: {
    primary: '#6750a4',
    background: '#ffffff',
    // ... more colors
  },
};

<PaperProvider theme={theme}>
  <App />
</PaperProvider>
```
Components access theme via **useTheme()** hook
Supports MD3 color tokens for consistency

---

## Responsive Design

### 21. What makes a mobile app responsive?

**Answer:**
Key principles:
1. **Flexible layouts**: use flex, not fixed widths
2. **Relative sizing**: percentages over absolute pixels
3. **Orientation support**: handle portrait/landscape
4. **Touch targets**: minimum 44x44 points
5. **Typography scaling**: respect system font sizes
6. **Safe areas**: use SafeAreaView
7. **Platform differences**: iOS vs Android patterns

### 22. How do you test responsiveness in React Native?

**Answer:**
Multiple approaches:
1. **Device simulators**: test various screen sizes
2. **Physical devices**: real-world testing
3. **Expo Go**: quick testing on actual device
4. **useWindowDimensions**: log screen dimensions
5. **Expo's device preview**: in documentation
6. **Chrome DevTools**: for web version

---

## Performance Optimization

### 23. How do you optimize FlatList performance?

**Answer:**
Best practices:
1. **keyExtractor**: provide stable unique keys
2. **getItemLayout**: if all items same height (skips measurement)
3. **maxToRenderPerBatch**: control render batch size
4. **windowSize**: control render window size
5. **removeClippedSubviews**: (Android) unmount offscreen views
6. **Avoid anonymous functions**: in renderItem
7. **Optimize item component**: use React.memo if needed

### 24. What are common React Native performance issues?

**Answer:**
Main culprits:
1. **Large lists without virtualization**: use FlatList, not ScrollView
2. **Heavy re-renders**: use useMemo, useCallback, React.memo
3. **Large images**: compress and optimize
4. **Synchronous bridge calls**: use asynchronous operations
5. **Animations on JS thread**: use Reanimated for 60fps
6. **Memory leaks**: clean up listeners in useEffect
7. **Not using Hermes**: enable Hermes engine

### 25. What is the Hermes engine?

**Answer:**
Hermes is a JavaScript engine optimized for React Native:
- **Faster startup**: ahead-of-time compilation
- **Less memory usage**: optimized garbage collection
- **Smaller app size**: bytecode compilation
- **Enabled by default** in newer RN versions
- Better performance on Android especially

---

## Testing

### 26. How do you test React Native components?

**Answer:**
Using React Testing Library and Jest:
```javascript
import { render, fireEvent } from '@testing-library/react-native';

test('button press', () => {
  const { getByText } = render(<MyButton />);
  fireEvent.press(getByText('Click me'));
  expect(mockFn).toHaveBeenCalled();
});
```
- **Unit tests**: individual components
- **Integration tests**: component interactions
- **E2E tests**: Detox for full app flows

### 27. What testing libraries do you use for React Native?

**Answer:**
Standard stack:
- **Jest**: test runner and assertion library
- **React Testing Library**: component testing
- **jest-expo**: Expo-specific Jest preset
- **@testing-library/jest-native**: additional matchers
- **Detox** (optional): E2E testing
- **Storybook** (optional): component documentation

---

## State Management

### 28. When would you need Redux or other state management?

**Answer:**
Use external state management when:
- State shared across many screens
- Complex state logic
- Need state persistence
- Large team needs predictable patterns
- Debugging requires time-travel

For this project, useState is sufficient because:
- Single screen app
- Simple filter state
- No global state needed
- Theme is handled by Paper

### 29. What state management options exist for React Native?

**Answer:**
Multiple options:
1. **useState/useReducer**: built-in, good for local state
2. **Context API**: shared state, no external library
3. **Redux**: predictable state container, large ecosystem
4. **MobX**: reactive state, less boilerplate
5. **Zustand**: lightweight, simple API
6. **Recoil**: atomic state management
7. **Jotai**: primitive atoms

Choose based on app complexity and team preference.

---

## Common Patterns

### 30. Explain the component vs screen pattern.

**Answer:**
**Components** (components/):
- Reusable UI pieces
- Accept props, no route knowledge
- Example: Button, Card, Input

**Screens** (screens/):
- Full pages/routes
- Compose components
- Handle navigation
- Manage screen-level state
- Example: HomeScreen, ProfileScreen

This separation improves reusability and testability.

### 31. How do you handle forms in React Native?

**Answer:**
Common approaches:
1. **Manual with useState**: simple forms
2. **react-hook-form**: performant, minimal re-renders
3. **Formik**: popular, lots of features
4. **Validation**: Yup or Zod schema validation

Example:
```javascript
const [email, setEmail] = useState('');
<TextInput 
  value={email} 
  onChangeText={setEmail}
/>
```

### 32. How do you handle navigation in React Native?

**Answer:**
**React Navigation** is the standard:
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>
```

Types: Stack, Tab, Drawer navigators
This project doesn't need navigation (single screen)

---

## Debugging

### 33. How do you debug React Native apps?

**Answer:**
Multiple tools:
1. **Console.log**: basic debugging
2. **React DevTools**: component inspection
3. **Flipper**: network, layout, logs
4. **Chrome DevTools**: JavaScript debugging
5. **Expo DevTools**: Expo-specific tools
6. **React Native Debugger**: all-in-one tool
7. **Reactotron**: state, API, tracking

Shortcuts: Cmd+D (iOS) or Cmd+M (Android) for dev menu

### 34. What are common React Native errors and solutions?

**Answer:**
**"Invariant Violation: Text strings must be rendered within <Text>"**
- Solution: wrap text in <Text> component

**"undefined is not an object (evaluating 'x.y')"**
- Solution: use optional chaining (x?.y)

**Metro bundler cache issues**
- Solution: npm start -- --clear

**Build failures**
- Solution: clear watchman, clean build folders

**Network errors**
- Solution: check localhost vs IP address in Expo

---

## Best Practices

### 35. What are React Native best practices you follow?

**Answer:**
Key practices:
1. **Use functional components** over class components
2. **TypeScript** for type safety (not used here per requirements)
3. **Folder structure**: organize by feature or type
4. **Component composition**: small, reusable components
5. **Keys in lists**: stable, unique keys
6. **Cleanup effects**: return cleanup functions
7. **Error boundaries**: catch errors gracefully
8. **Code splitting**: lazy load when needed
9. **Accessibility**: labels, roles, contrast
10. **Performance**: profile before optimizing

---

## Advanced Topics

### 36. What is the new React Native architecture?

**Answer:**
New architecture has two main parts:

**Fabric** (new renderer):
- Synchronous layout calculation
- Better prioritization
- Host platform capabilities

**TurboModules** (new native modules):
- Lazy loading of modules
- Faster JavaScript to native communication
- Type safety with CodeGen

Benefits: better performance, smaller bundle, concurrent features

### 37. How do you handle gestures in React Native?

**Answer:**
Use **react-native-gesture-handler**:
```javascript
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const tap = Gesture.Tap().onEnd(() => {
  console.log('tapped');
});

<GestureDetector gesture={tap}>
  <View />
</GestureDetector>
```

Supports: tap, pan, pinch, rotation
Runs on UI thread for 60fps

### 38. How do you handle animations in React Native?

**Answer:**
Three main options:

1. **Animated API** (built-in): good for simple animations
2. **LayoutAnimation**: automatic layout transitions
3. **react-native-reanimated**: best for complex, performant animations

Reanimated runs animations on UI thread (not JS thread) for 60fps

### 39. How do you store data locally in React Native?

**Answer:**
Options:
1. **AsyncStorage**: key-value store, deprecated but still used
2. **@react-native-async-storage/async-storage**: community version
3. **react-native-mmkv**: fastest, synchronous
4. **SQLite**: relational database for complex data
5. **Realm**: object database
6. **WatermelonDB**: reactive, performant for large datasets

Choose based on data complexity and performance needs.

### 40. How would you implement deep linking?

**Answer:**
Using React Navigation:
```javascript
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'user/:id',
    },
  },
};

<NavigationContainer linking={linking}>
```

Configure in app.json for Expo
Handle in native code for bare React Native
Used for: email links, push notifications, social sharing

---

## Quick Reference

### Key Takeaways for This Project:
✅ Cross-platform with Expo (web, iOS, Android)  
✅ React Native Paper for Material Design UI  
✅ Performance optimized with FlatList and useMemo  
✅ Light/dark theme support  
✅ Smart filtering system  
✅ Component-based architecture  
✅ Responsive design with flexbox  
✅ Tested with Jest and React Testing Library  

### When Asked "Why This Approach?":
Always mention:
1. **Performance**: virtualization, memoization
2. **User Experience**: responsive, accessible, themed
3. **Developer Experience**: simple, maintainable, testable
4. **Cross-platform**: single codebase, consistent UI
5. **Scalability**: easy to extend with more features

---

**Good luck with your interview! 🚀**

