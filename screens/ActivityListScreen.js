import React, { useState, useMemo } from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';
import { Appbar, Snackbar, Text, useTheme } from 'react-native-paper';
import ActivityCard from '../components/ActivityCard';
import FilterBar from '../components/FilterBar';
import ThemeToggle from '../components/ThemeToggle';
import { mockActivities, activityTypes, activityStatuses } from '../data/mockActivities';

const ActivityListScreen = ({ isDark, onToggleTheme }) => {
  const theme = useTheme();
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const filteredActivities = useMemo(() => {
    return mockActivities.filter((activity) => {
      const typeMatch = selectedType === 'All Types' || activity.type === selectedType;
      const statusMatch = selectedStatus === 'All Status' || activity.status === selectedStatus;
      return typeMatch && statusMatch;
    });
  }, [selectedType, selectedStatus]);

  const handleFilterChange = (type, status) => {
    setSelectedType(type);
    setSelectedStatus(status);
  };

  const handleActionPress = (activity) => {
    let message = '';
    switch (activity.status) {
      case 'Not Started':
        message = `Starting: ${activity.title}`;
        break;
      case 'In Progress':
        message = `Continuing: ${activity.title}`;
        break;
      case 'Completed':
        message = `Reviewing: ${activity.title}`;
        break;
      default:
        message = `Opening: ${activity.title}`;
    }
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const renderItem = ({ item }) => (
    <ActivityCard activity={item} onActionPress={handleActionPress} />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text variant="titleMedium" style={styles.emptyText}>
        No activities found
      </Text>
      <Text variant="bodyMedium" style={styles.emptySubtext}>
        Try adjusting your filters
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text variant="titleSmall" style={styles.resultCount}>
        {filteredActivities.length} {filteredActivities.length === 1 ? 'Activity' : 'Activities'}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header elevated>
        <Appbar.Content title="Learning Activities" titleStyle={styles.appbarTitle} />
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </Appbar.Header>

      <FilterBar
        types={activityTypes}
        statuses={activityStatuses}
        onFilterChange={handleFilterChange}
      />

      <FlatList
        data={filteredActivities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={Platform.OS === 'web'}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarTitle: {
    fontWeight: '600',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resultCount: {
    opacity: 0.7,
  },
  listContent: {
    paddingBottom: 16,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    marginBottom: 8,
    opacity: 0.6,
  },
  emptySubtext: {
    opacity: 0.4,
  },
});

export default ActivityListScreen;

