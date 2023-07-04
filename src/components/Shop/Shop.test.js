import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Shop from './Shop';

it('renders without crashing', () => {
  render(<BrowserRouter><Shop /></BrowserRouter>);
});

// it('renders the site title', () => {
//     render(<BrowserRouter><Shop /></BrowserRouter>);

//     screen.debug()
//     const title = screen.getByText('YourRestaurant');
//     expect(title).toBeInTheDocument();
// });

// it('renders the navigation', () => {
//     render(<BrowserRouter><Shop /></BrowserRouter>);
//     const navigation = screen.getByText('Menu');
//     const emptyBasket = screen.getByText('0');
//     expect(navigation).toBeInTheDocument();
//     expect(emptyBasket).toBeInTheDocument();
// });