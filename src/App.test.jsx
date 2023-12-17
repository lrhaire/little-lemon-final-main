import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Booking from './pages/Booking';

test('renders booking page', () => {
  render(
  <BrowserRouter>
  <Booking />
  </BrowserRouter>);
  const headingElement = screen.getByText("Book Now")
  expect(headingElement).toBeInTheDocument();
})

  test('Test initialize/update Times', () => {
  render(
  <BrowserRouter>
  <Booking />
  </BrowserRouter>);
  const initialTime = screen.getByRole("button");
  fireEvent.change(initialTime, { target: { value: "17:00" }})

  })