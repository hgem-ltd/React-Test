import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from './Header';

it('renders without crashing', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
});

it('renders the site title', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const title = screen.getByText('YourRestaurant');
    expect(title).toBeInTheDocument();
});

it('renders the navigation', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const navigation = screen.getByText('Menu');
    const emptyBasket = screen.getByText('0');
    expect(navigation).toBeInTheDocument();
    expect(emptyBasket).toBeInTheDocument();
});