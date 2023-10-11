const form = document.getElementById('expense-form');
const moneySpentInput = document.getElementById('money-spent');
const descriptionInput = document.getElementById('description');
const categorySelect = document.getElementById('category');
const expensesList = document.getElementById('expenses-list');

let expenses = []; // In-memory data structure to store expenses

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const moneySpent = moneySpentInput.value;
  const description = descriptionInput.value;
  const category = categorySelect.value;

  // Add the expense to the in-memory data structure
  expenses.push({ moneySpent, description, category });

  // Clear the form
  moneySpentInput.value = '';
  descriptionInput.value = '';

  // Update the displayed expenses
  displayExpenses();
});

function displayExpenses() {
  expensesList.innerHTML = '';
  expenses.forEach((expense, index) => {
    expensesList.innerHTML += `
      <div class="expense">
        <p>${expense.description} - ${expense.moneySpent} - ${expense.category}</p>
        <button class="delete-button" onclick="deleteExpense(${index})">Delete</button>
      </div>`;
  });
}

function deleteExpense(index) {
  // Remove the expense from the in-memory data structure
  expenses.splice(index, 1);
  
  // Update the displayed expenses
  displayExpenses();
}

displayExpenses();
