const solution = require('./seatsInTheater.js');

test('test 1', () => {
    expect(solution(16, 11, 5, 3)).toBe(96);
});

test('test 2', () => {
    expect(solution(1, 1, 1, 1)).toBe(0);
});

test('test 3', () => {
    expect(solution(13, 6, 8, 3)).toBe(18);
});

test('test 4', () => {
    expect(solution(60, 100, 60, 1)).toBe(99);
});

test('test 5', () => {
    expect(solution(1000, 1000, 1000, 1000)).toBe(0);
});
