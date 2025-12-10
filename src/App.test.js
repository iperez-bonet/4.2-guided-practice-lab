import { render, fireEvent, getByTestId } from '@testing-library/react';
import Counter from './Counter.js';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Counter buttons change state value which is correctly displayed on page', () => {
  test('Increase button increments state value', () => {
    const { getByRole, getByTestId } = render(<Counter />);
    const incButton = getByRole('button', {name: /increase/i});
    const count = getByTestId("count");
    fireEvent.click(incButton);
    const counter = count.innerHTML;
    expect(counter).toBe("1");
  }); 

  test ("Decrease button decrements state value", () => {
    const { getByRole, getByTestId } = render(<Counter />);
    const incButton = getByRole('button', {name: /increase/i});
    const decButton = getByRole('button', {name: /decrease/i});
    const count = getByTestId("count");
    fireEvent.click(incButton);
    fireEvent.click(incButton);
    fireEvent.click(decButton);
    const counter = count.innerHTML;
    expect(counter).toBe("1");
  })
});