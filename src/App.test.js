import { render, screen } from '@testing-library/react';
import BookingForm from './components/reserveTableForm/BookingForm.js';
import Main from './components/main/Main.js';


test('Renders the BookingForm label, Choose date', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes fetches available times', () => {
  // Mock the fetchAPI function to return a sample array of available times
  const mockFetchAPI = jest.fn(() => ['17:00', '17:30', '18:00']);

  // Render the Main component with the mocked fetchAPI function
  render(<Main />);

  // Assert that the fetchAPI function was called with the current date
  expect(mockFetchAPI).toHaveBeenCalledWith(new Date());
});

