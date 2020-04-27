const LinkedList = require('../../src/LinkedList/LinkedList');

test('LinkedList should be not null', () => {
    expect(new LinkedList()).not.toBeNull();
});

test('LinkedList should be able to add a node as a head', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toBe(1);
});

test('LinkedList should be able to add more than 1 element', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.size()).toBe(2);
});