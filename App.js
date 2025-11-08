import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import ActivityListScreen from './screens/ActivityListScreen';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6750a4',
    primaryContainer: '#eaddff',
    onPrimaryContainer: '#21005e',
    secondary: '#625b71',
    secondaryContainer: '#e8def8',
    onSecondaryContainer: '#1e192b',
    surface: '#fef7ff',
    onSurface: '#1c1b1f',
    background: '#fef7ff',
    onBackground: '#1c1b1f',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#d0bcff',
    primaryContainer: '#4f378b',
    onPrimaryContainer: '#eaddff',
    secondary: '#ccc2dc',
    secondaryContainer: '#4a4458',
    onSecondaryContainer: '#e8def8',
    surface: '#1c1b1f',
    onSurface: '#e6e1e5',
    background: '#1c1b1f',
    onBackground: '#e6e1e5',
  },
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <ActivityListScreen isDark={isDarkMode} onToggleTheme={toggleTheme} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

