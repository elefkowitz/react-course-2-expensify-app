import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@init' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {id: '4',
        description: 'Water',
        amount: 50,
        note: '',
        createdAt: 20000}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, {
        id: '4',
        description: 'Water',
        amount: 50,
        note: '',
        createdAt: 20000}]);
});

test('should edit an expense', () => {
    const updates = {
        amount: 9999
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 9999,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, expenses[2]])
});

test('should edit an expense', () => {
    const updates = {
        amount: 9999
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});