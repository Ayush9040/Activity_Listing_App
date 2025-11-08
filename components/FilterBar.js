import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Chip, Text, useTheme } from 'react-native-paper';

const FilterBar = ({ types, statuses, onFilterChange }) => {
  const theme = useTheme();
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    onFilterChange(type, selectedStatus);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    onFilterChange(selectedType, status);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.section}>
        <Text variant="labelMedium" style={styles.label}>
          Type
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipContainer}
        >
          {types.map((type) => (
            <Chip
              key={type}
              selected={selectedType === type}
              onPress={() => handleTypeSelect(type)}
              style={styles.chip}
              mode={selectedType === type ? 'flat' : 'outlined'}
            >
              {type}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text variant="labelMedium" style={styles.label}>
          Status
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipContainer}
        >
          {statuses.map((status) => (
            <Chip
              key={status}
              selected={selectedStatus === status}
              onPress={() => handleStatusSelect(status)}
              style={styles.chip}
              mode={selectedStatus === status ? 'flat' : 'outlined'}
            >
              {status}
            </Chip>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    elevation: 1,
  },
  section: {
    marginBottom: 8,
  },
  label: {
    paddingHorizontal: 8,
    marginBottom: 8,
    opacity: 0.7,
  },
  chipContainer: {
    paddingHorizontal: 8,
    gap: 8,
  },
  chip: {
    marginRight: 0,
  },
});

export default FilterBar;

