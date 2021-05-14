import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
   render(<ContactForm />);
   const errors = screen.queryAllByAltText(/^(.*>(error)[^$]*)$/i);
   expect(errors.length).toEqual(0);
});

test('renders the contact form header', ()=> {
    render(<ContactForm/>);
    const header =screen.queryByText(/Contact Form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Contact Form");    
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<ContactForm/>);
    const username = screen.getByLabelText("First Name*");
  userEvent.type(username, "Eric");
  const errors = screen.queryAllByText(/^(.*?(error)[^$]*)$/i);
  expect(errors.length).toEqual(1);
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});