import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
  // This will render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText(/^\+$/)); // Use regex to match exactly the plus sign
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Increment first to avoid negative count
  fireEvent.click(screen.getByText(/^\+$/));
  fireEvent.click(screen.getByText(/^-$/)); // Use regex to match exactly the minus sign
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});
