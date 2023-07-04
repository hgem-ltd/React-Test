import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import FoodMenu from './FoodMenu';

const defaultProps = {
    items: []
}

it('renders without crashing', () => {
    render(<BrowserRouter><FoodMenu {...defaultProps} /></BrowserRouter>);
});

it('renders a menu title', () => {
    render(<BrowserRouter><FoodMenu {...defaultProps} /></BrowserRouter>)
    const title = screen.getByText('Menu');
    expect(title).toBeInTheDocument();
});

it('renders a message if no items', () => {
    render(<BrowserRouter><FoodMenu {...defaultProps} /></BrowserRouter>);
    const message = screen.getByText('No menu items loaded. Please try refreshing the page.');
    expect(message).toBeInTheDocument();
});
