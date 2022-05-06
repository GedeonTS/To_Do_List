import UserTask from './__mocks__/Test2.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const addAndRemove = new UserTask();
describe('test localStorage add', () => {
  test('Add first sample', () => {
    const addAndRemove = new UserTask('qwerty', false, 1);
    expect(addAndRemove.add()).toBe(8);
  });
  test('Add second sample', () => {
    const addAndRemove = new UserTask('Azerty', false, 2);
    expect(addAndRemove.add()).toBe(9);
  });
  test('Add third sample', () => {
    const addAndRemove = new UserTask('new test', false, 3);
    expect(addAndRemove.add()).toBe(10);
  });
  const addAndRemove1 = new UserTask('vitron1', false, 4);
  addAndRemove1.add();
  const addAndRemove2 = new UserTask('vitron2', false, 5);
  addAndRemove2.add();
  const addAndRemove3 = new UserTask('vitron3', false, 6);
  addAndRemove3.add();
  const addAndRemove4 = new UserTask('vitron4', false, 7);
  addAndRemove4.add();
  const addAndRemove5 = new UserTask('vitron4', false, 8);
  addAndRemove5.add();
  const addAndRemove6 = new UserTask('vitron4', false, 9);
  addAndRemove6.add();
  const addAndRemove7 = new UserTask('vitron4', false, 10);
  addAndRemove7.add();
});

describe('test localStorage remove', () => {
  test('remove first sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(0)).toBe(9);
  });
  test('remove second sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(1)).toBe(8);
  });
  test('remove third sample', () => {
    const addAndRemove = new UserTask();
    expect(addAndRemove.removeTask(2)).toBe(7);
  });
});

describe('Remove checked tasks', () => {
  test('add elmnts check and remove checkeds elemnts', () => {
    addAndRemove.check(3);
    addAndRemove.check(4);
    addAndRemove.check(5);
    expect(addAndRemove.btnRemoveChecked()).toBe(4);
  });
  test('alorem ipsum remove checkeds elmnts', () => {
    addAndRemove.check(1);
    addAndRemove.check(2);
    expect(addAndRemove.btnRemoveChecked()).toBe(2);
  });
  test('remove all checkeds elmnts', () => {
    addAndRemove.check(0);
    expect(addAndRemove.btnRemoveChecked()).toBe(1);
  });
});

describe('Editing storage', () => {
  test('Editing Task description test1', () => {
    expect(addAndRemove.updateStore('lorem ipsum', 0)).toBe('lorem ipsum');
  });
  test('Editing Task description test2', () => {
    expect(addAndRemove.updateStore('irasshaimase', 0)).toBe('irasshaimase');
  });
  test('Editing Task description test3', () => {
    expect(addAndRemove.updateStore('muito obrigado', 0)).toBe('muito obrigado');
  });
});
