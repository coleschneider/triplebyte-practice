import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/Hello Triplebyte!!!/i);
  expect(greeting).toBeInTheDocument();
});
