import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter'
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import {userEvent} from "@storybook/testing-library";


describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10}}
        });
        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10}}
        });
        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
