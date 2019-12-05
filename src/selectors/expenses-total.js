export default (expenses) => {
    const amounts = expenses.map((expense) => expense.amount);
    const reducer = (a, b) => a + b;
    
    return amounts.reduce(reducer, 0);
};