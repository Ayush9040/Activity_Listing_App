import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Chip, useTheme } from 'react-native-paper';

const ActivityCard = ({ activity, onActionPress }) => {
  const theme = useTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return '#9E9E9E';
      case 'In Progress':
        return '#FF9800';
      case 'Completed':
        return '#4CAF50';
      default:
        return theme.colors.primary;
    }
  };

  const getActionButton = (status) => {
    switch (status) {
      case 'Not Started':
        return { label: 'Start', icon: 'play-circle' };
      case 'In Progress':
        return { label: 'Continue', icon: 'arrow-right-circle' };
      case 'Completed':
        return { label: 'Review', icon: 'eye' };
      default:
        return { label: 'View', icon: 'open-in-new' };
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Online Class':
        return 'video';
      case 'Assignment':
        return 'file-document';
      case 'Quiz':
        return 'clipboard-check';
      case 'Discussion':
        return 'forum';
      default:
        return 'book';
    }
  };

  const actionButton = getActionButton(activity.status);
  const statusColor = getStatusColor(activity.status);

  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <View style={styles.header}>
          <View style={styles.typeChip}>
            <Chip
              icon={getTypeIcon(activity.type)}
              style={[styles.chip, { backgroundColor: theme.colors.primaryContainer }]}
              textStyle={{ color: theme.colors.onPrimaryContainer }}
            >
              {activity.type}
            </Chip>
          </View>
          <Chip
            style={[styles.statusChip, { backgroundColor: statusColor }]}
            textStyle={styles.statusText}
          >
            {activity.status}
          </Chip>
        </View>

        <Text variant="titleLarge" style={styles.title}>
          {activity.title}
        </Text>

        <Text variant="bodyMedium" style={styles.description}>
          {activity.description}
        </Text>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text variant="bodySmall" style={styles.detailLabel}>
              📅 Date:
            </Text>
            <Text variant="bodySmall" style={styles.detailValue}>
              {new Date(activity.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </Text>
          </View>

          {activity.time && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                🕐 Time:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {activity.time}
              </Text>
            </View>
          )}

          {activity.instructor && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                👨‍🏫 Instructor:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {activity.instructor}
              </Text>
            </View>
          )}

          {activity.duration && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                ⏱️ Duration:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {activity.duration}
              </Text>
            </View>
          )}

          {activity.dueDate && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                📆 Due Date:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {new Date(activity.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Text>
            </View>
          )}

          {activity.questions && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                ❓ Questions:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {activity.questions}
              </Text>
            </View>
          )}

          {activity.score && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                ⭐ Score:
              </Text>
              <Text variant="bodySmall" style={[styles.detailValue, styles.score]}>
                {activity.score}
              </Text>
            </View>
          )}

          {activity.posts !== undefined && (
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                💬 Posts:
              </Text>
              <Text variant="bodySmall" style={styles.detailValue}>
                {activity.posts}
              </Text>
            </View>
          )}
        </View>
      </Card.Content>

      <Card.Actions>
        <Button
          mode="contained"
          icon={actionButton.icon}
          onPress={() => onActionPress(activity)}
          style={styles.actionButton}
        >
          {actionButton.label}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 8,
  },
  typeChip: {
    flex: 1,
  },
  chip: {
    alignSelf: 'flex-start',
  },
  statusChip: {
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  title: {
    marginBottom: 8,
    fontWeight: '600',
  },
  description: {
    marginBottom: 16,
    opacity: 0.8,
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailLabel: {
    opacity: 0.7,
    minWidth: 100,
  },
  detailValue: {
    fontWeight: '500',
    flex: 1,
  },
  score: {
    color: '#4CAF50',
    fontWeight: '700',
  },
  actionButton: {
    marginLeft: 'auto',
  },
});

export default ActivityCard;

