import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with mods', () => {
        const excepted = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(excepted);
    });
    test('with mods false', () => {
        const excepted = 'someClass class1 class2 hovered ';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(excepted);
    });
    test('with mods undefined', () => {
        const excepted = 'someClass class1 class2 hovered ';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(excepted);
    });
});
