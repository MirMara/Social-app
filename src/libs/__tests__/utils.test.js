import {greetings } from "./../utils";

it('test greetings () function', () => {
    const result = greetings('Miriana');
    expect (result).toBe('Hello dear Miriana');
});

it("testing an array", () => {
    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
});
