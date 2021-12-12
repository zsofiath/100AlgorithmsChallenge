import { addBorder } from './addBorder';

xdescribe(addBorder.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ['abc', 'ded'];

        // act
        const response = addBorder(data);

        expect(response).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    });
});
