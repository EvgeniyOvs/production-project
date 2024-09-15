import {counterReducer, counterAction} from "./counterSlice";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {CounterSchema} from "../types/counterSchema";

describe('counterSlice.test', () =>{
    test('decrement', () =>{
        const state: CounterSchema = { value: 10}

        expect(
            counterReducer(state, counterAction.decrement())
        )
            .toEqual({ value: 9})
    });
        test('increment', () =>{
            const state: CounterSchema = { value: 10}

            expect(
                counterReducer(state, counterAction.increment())
            )
                .toEqual({ value: 11})
        });
    test('should work with empty state', () =>{
        const state: CounterSchema = { value: 10}

        expect(
            counterReducer(undefined, counterAction.increment())
        )
            .toEqual({ value: 1})
    });
})
