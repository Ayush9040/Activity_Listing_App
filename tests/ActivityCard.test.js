import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
import ActivityCard from '../components/ActivityCard';

const mockActivity = {
  id: '1',
  title: 'Introduction to Neural Networks',
  type: 'Online Class',
  status: 'Not Started',
  date: '2025-11-08',
  time: '10:00 AM',
  instructor: 'Dr. Sarah Johnson',
  duration: '90 mins',
  description: 'Learn the fundamentals of neural networks and deep learning',
};

const renderWithTheme = (component) => {
  return render(<PaperProvider>{component}</PaperProvider>);
};

describe('ActivityCard', () => {
  it('renders activity title correctly', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Introduction to Neural Networks')).toBeTruthy();
  });

  it('renders activity type chip', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Online Class')).toBeTruthy();
  });

  it('renders activity status chip', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Not Started')).toBeTruthy();
  });

  it('renders activity description', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Learn the fundamentals of neural networks and deep learning')).toBeTruthy();
  });

  it('renders instructor name when provided', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Dr. Sarah Johnson')).toBeTruthy();
  });

  it('renders duration when provided', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('90 mins')).toBeTruthy();
  });

  it('displays "Start" button for Not Started activities', () => {
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={() => {}} />
    );
    expect(getByText('Start')).toBeTruthy();
  });

  it('displays "Continue" button for In Progress activities', () => {
    const inProgressActivity = { ...mockActivity, status: 'In Progress' };
    const { getByText } = renderWithTheme(
      <ActivityCard activity={inProgressActivity} onActionPress={() => {}} />
    );
    expect(getByText('Continue')).toBeTruthy();
  });

  it('displays "Review" button for Completed activities', () => {
    const completedActivity = { ...mockActivity, status: 'Completed' };
    const { getByText } = renderWithTheme(
      <ActivityCard activity={completedActivity} onActionPress={() => {}} />
    );
    expect(getByText('Review')).toBeTruthy();
  });

  it('calls onActionPress when action button is pressed', () => {
    const mockOnActionPress = jest.fn();
    const { getByText } = renderWithTheme(
      <ActivityCard activity={mockActivity} onActionPress={mockOnActionPress} />
    );
    
    const startButton = getByText('Start');
    fireEvent.press(startButton);
    
    expect(mockOnActionPress).toHaveBeenCalledTimes(1);
    expect(mockOnActionPress).toHaveBeenCalledWith(mockActivity);
  });

  it('renders score for completed activities with scores', () => {
    const completedActivityWithScore = {
      ...mockActivity,
      status: 'Completed',
      score: '92%',
    };
    const { getByText } = renderWithTheme(
      <ActivityCard activity={completedActivityWithScore} onActionPress={() => {}} />
    );
    expect(getByText('92%')).toBeTruthy();
  });

  it('renders due date for assignments', () => {
    const assignmentActivity = {
      ...mockActivity,
      type: 'Assignment',
      dueDate: '2025-11-15',
    };
    const { getByText } = renderWithTheme(
      <ActivityCard activity={assignmentActivity} onActionPress={() => {}} />
    );
    expect(getByText(/Nov 15, 2025/)).toBeTruthy();
  });
});

