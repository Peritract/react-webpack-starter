/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResourceCard from './ResourceCard';

describe("ResourceCard component", () => {

    beforeEach(() => {
        render(<ResourceCard name="TEST HEADING!" description="test" startingValue={33}/>)
    })

    it("Displays a heading with the appropriate text", () =>{

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("TEST HEADING!");

    })

    it("Displays the starting value on its counter", () => {

        // Grab the relevant element
        const counter = screen.getByRole("figure");

        // Make assumptions about it
        expect(counter).toBeInTheDocument();
        expect(counter.textContent).toBe("33");

    })

    it("Displays the correct starting description", () => {

        const desc = screen.getByText("test");

        expect(desc).toBeInTheDocument();
        expect(desc.textContent).toBe("test");
    })

    it("Increments the counter when the + button is clicked.", async () => {

        const button = screen.getByText("+");
        const counter = screen.getByRole("figure");

        expect(counter.textContent).toBe("33");
        await userEvent.click(button);
        expect(counter.textContent).toBe("34");
    })

    it("Resets the counter when the reset button is clicked.", async () => {

        const button = screen.getByText("Reset");
        const counter = screen.getByRole("figure");

        expect(counter.textContent).toBe("33");
        await userEvent.click(button);
        expect(counter.textContent).toBe("0");
    })
})