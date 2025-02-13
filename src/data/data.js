const arr = [
        {
    groupLevel: 'Level 1',
    items: [
        {
            id: 1,
            name: 'Compare',
            func: function test() { return 3 > 5; },
        },
        {
            id: 2,
            name: 'Greet',
            func: function test() { return 'Hello World!'; },
        },
        {
            id: 3,
            name: 'Addition',
            func: function test() { return 5 + 5; }
        }
    ],
        },
        {
    groupLevel: 'Level 2',
    items: [
        {
            id: 1,
            name: 'Multiplicity',
            func: function test() { return 3 * 5; },
        },
        {
            id: 2,
            name: 'GoodBye',
            func: function test() { return 'Good Bye World!'; },
        },
        {
            id: 3,
            name: 'Substraction',
            func: function test() { return 5 + 5; }
        }
    ],
}
];

export default arr;
