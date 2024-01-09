import axios from 'axios';
import * as apiCalls from './apiCalls'

describe('apiCalls', () => {

    // test for signup functionality
    describe('signup', () => {
        it('calls /api/1.0/users', () => {
            const mockSignup = jest.fn();
            axios.post = mockSignup;
            apiCalls.Signup();

            // jest provides us the api cal history and how many times it calls
            // when we get the call no, we get parameters array, hence [0] again to loop 1st parameter
            const path = mockSignup.mock.calls[0][0];
            expect(path).toBe('/api/1.0/users');
        })
    })
})