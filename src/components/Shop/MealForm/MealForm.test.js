import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MealForm from './MealForm';

it('renders without crashing', () => {
    render(<BrowserRouter><MealForm  /></BrowserRouter>);
});

it('renders a quantity input', () => {
    render(<BrowserRouter><MealForm /></BrowserRouter>)
    const quantityInput = screen.getByRole('spinbutton');
    const quantityLabel = screen.getByLabelText('Quantity')
    expect(quantityLabel).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
});

it('renders Add button', () => {
    render(<BrowserRouter><MealForm /></BrowserRouter>)
    const button = screen.getByRole('button');
    expect(button.textContent).toEqual('Add');
});
