import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import FoodMenuItem from './FoodMenuItem';

const defaultProps = {
    item: {
        name: 'testItem',
        price: 10
    }
}

it('renders without crashing', () => {
    render(<BrowserRouter><FoodMenuItem {...defaultProps} /></BrowserRouter>);
});

it('renders item details', () => {
    render(<BrowserRouter><FoodMenuItem {...defaultProps} /></BrowserRouter>)
    const itemTitle = screen.getByText('testItem');
    const itemPrice = screen.getByText('£10.00')
    expect(itemTitle).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
});

it('renders item vegetarian flag', () => {
    const props = Object.assign(
        {},
        defaultProps,
        {
            item: {
                ...defaultProps.item,
                vegetarian: true
            }
        }
    );
    render(<BrowserRouter><FoodMenuItem {...props} /></BrowserRouter>)
    const vegetarianFlag = screen.getByText('V');
    expect(vegetarianFlag).toBeInTheDocument();
});

