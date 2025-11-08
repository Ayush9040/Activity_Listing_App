import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';

const ThemeToggle = ({ isDark, onToggle }) => {
  const theme = useTheme();

  return (
    <IconButton
      icon={isDark ? 'weather-sunny' : 'weather-night'}
      iconColor={theme.colors.onSurface}
      size={24}
      onPress={onToggle}
      accessibilityLabel="Toggle theme"
    />
  );
};

export default ThemeToggle;

