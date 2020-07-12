import React from 'react';
import ReactDom from 'react-dom';
import SignOut from '../components/SignOut';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';


it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDom.render(<SignOut></SignOut>, div)
})

