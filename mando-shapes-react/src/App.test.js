import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Mando Shapes/i);
  expect(titleElement).toBeInTheDocument();
});
