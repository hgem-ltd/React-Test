import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Basket from './Basket'
import BasketProvider from '../../context/BasketProvider';
import BasketContext from '../../context/BasketContext';

it('renders without crashing', () => {
  render(<BrowserRouter><Basket /></BrowserRouter>);
});

it('renders the basket title', () => {
    render(<BrowserRouter><Basket /></BrowserRouter>);
    const title = screen.getByText('Basket');
    expect(title).toBeInTheDocument();
});

it('renders the checkout button', () => {
    render(<BrowserRouter><Basket /></BrowserRouter>);
    const button = screen.getByRole('button', {
        name: /Checkout/i
      })
    expect(button).toBeInTheDocument();
});

it('renders empty when no items set', () => {
    render(<BrowserRouter><Basket /></BrowserRouter>);
    const totalText = screen.getByText('Total Amount');
    const totalValue = screen.getByText('£0.00');
    expect(totalText).toBeInTheDocument();
    expect(totalValue).toBeInTheDocument();
});

it('renders basket titles', () => {
    render(<BrowserRouter><Basket /></BrowserRouter>, { wrapper: BasketProvider });
    const listItems = screen.queryAllByRole('listitem') 
    expect(listItems.length).toBe(1); 
});

it('renders basket item', () => {
    const basketItemMock = {
        items: [{
            id: 1,
            name: 'testProduct',
            price: 5,
            vegetarian: true,
            amount: 1,
        }],
        total: 5
    }

    render(
        <BasketContext.Provider value={basketItemMock}>
            <BrowserRouter><Basket /></BrowserRouter>
        </BasketContext.Provider>
    )

    const listItems = screen.queryAllByRole('listitem') 
    expect(listItems.length).toBe(2);

    const productName = screen.getByText('testProduct')
    const vegetarian = screen.getByText('V')
    const productPrice = screen.getAllByText('£5.00')
    expect(productName).toBeInTheDocument
    expect(vegetarian).toBeInTheDocument
    expect(productPrice.length).toBe(2)
});