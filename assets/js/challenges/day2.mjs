/*
 * This is a template for the advent challenge definitions.
 */

// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day Two - What's the most popular toy? ",
    description: "It’s almost Christmas and Santa and his elves still have a lot of toys to make. \
    But they don’t know where to start. \
    Write a function that when passed an array of toys works out which is the most popular toy.\
    Fill in the body of the function to return the correct values",

    // Code to be append to the user submission.
    // Here it converts the first argument to an input variable,
    // (so the user can access the first parameter as input instead of arg[0]).
    boilerPlate: "let input = args[0]; ",

    // Code to be initial placed in the code panel
    initial: "initial code goes here",

    // The argument list to be sent to user code. Should be an array of arrays.
    // The outer array is the individual tests, the inner array is the argument
    // list to be sent to the user code for each test.
    args: [
        []
    ],

    /**
     * Performs any setup prior to running the tests. Can be used to generate
     * random inputs.
     */
    setup: function () {},

    /**
     * Iterates through the input list and runs the user code for each test.
     * @param {function} func 
     * @returns {Boolean} false if any tests fail, otherwise true.
     */
    runTests: function (func) {
        for (const test of this.args) {
            if (func(test) != this.test(test)) return false;
        }
        return true;
    },

    /**
     * Reference implementation. User code should provide the same result
     */
    test: function (input) {
        return false;
    }
}