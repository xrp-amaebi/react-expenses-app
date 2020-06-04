// export const getExpensesTotal = (expenses) => {
//     const expenseList = [];
//     if (expenses === undefined || expenses.length === 0 ) {
//         return 0;
//     } else if (expenses.length > 1) {
//         expenses.map(({ amount = 0 }) => {
//             amount ? expenseList.push(amount) : amount;
//         });
//         const expenseTotal = expenseList.reduce((a, b) => a + b);
//         return expenseTotal;
//     } else {
//         return expenses['amount'];
//     }
// }; 

// export default (expenses) => {
//     const total = getExpensesTotal(expenses);
//     return total 
// };

export default (expenses) => expenses.map(({amount = 0}) => amount).reduce((sum, value) => sum + value, 0);
