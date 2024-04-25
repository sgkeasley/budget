// Create five income objects:
let incomeItems = [];

function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
};

let income1 = new Income("Salary", 3000, "Yes");
let income2 = new Income("Freelance work", 1200, "No");
let income3 = new Income("Birthday cash", 100, "No");
let income4 = new Income("Vinted clothes sold", 50, "No");
let income5 = new Income("Returned shoes refund", 75, "No");

incomeItems.push(income1, income2, income3, income4, income5);

// Create five expenses objects:
let expenseItems = [];

function Expense(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
};

let expense1 = new Expense("Mortage", 1500, "Yes");
let expense2 = new Expense("Groceries", 1000, "Yes");
let expense3 = new Expense("Travel", 200, "Yes");
let expense4 = new Expense("Gym membership", 55, "Yes");
let expense5 = new Expense("Night out", 150, "No");

expenseItems.push(expense1, expense2, expense3, expense4, expense5);


// Create a function to display income or expense items:
function displayItems(array) {
  try {
    let objectList = "";
    for (object of array) {
      objectList += `${object.name}, £${object.amount}, ${object.recurring}\n`;
    }
    return objectList;
  } catch (err) {
    console.log(err);
  }
};

// Use a prompt box to display the income items and let the user add another entry:
function addNewIncomeItem() {
  try {
    const incomeDisplay = displayItems(incomeItems);
    let newIncomeItem = new Income(
      prompt(`Income items (name, amount, recurring Y/N):\n${incomeDisplay}
                To add a new entry, enter item name:`),
      prompt(`Enter item amount:`),
      prompt(`Is this item recurring? Yes/No:`)
    );

    incomeItems.push(newIncomeItem);
    sessionStorage.setItem("income", JSON.stringify(incomeItems));
  } catch (err) {
    console.log(err);
  }
};

// Use a prompt box to display the expense items and let the user add another entry:
function addNewExpenseItem() {
  try {
    const expensesDisplay = displayItems(expenseItems);
    let newExpenseItem = new Expense(
      prompt(`Expense items (name, amount, recurring Y/N):\n${expensesDisplay}
                To add a new entry, enter item name:`),
      prompt(`Enter item amount:`),
      prompt(`Is this item recurring? Yes/No:`)
    );

    expenseItems.push(newExpenseItem);
    sessionStorage.setItem("expenses", JSON.stringify(expenseItems));
  } catch (err) {
    console.log(err);
  }
};

// Create function to sum total of income or expense items:
function sumAmount(array) {
  try {
    let amountsTotal = 0;
    for (object of array) {
      amountsTotal += Number(object.amount);
    }
    return amountsTotal;
  } catch (err) {
    console.log(err);
  }
};

// Use a prompt box to display disposable income and put some into savings:
function savingsAndTotal() {
  try {
    incomeItems = JSON.parse(sessionStorage.getItem("income"));
    expenseItems = JSON.parse(sessionStorage.getItem("expenses"));
    let incomeTotal = sumAmount(incomeItems);
    let expenseTotal = sumAmount(expenseItems);

    // Create function to give total disposable income:
    let dispIncome = (x, y) => {
      return x - y;
    };

    let disposableSubTotal = dispIncome(incomeTotal, expenseTotal);
    let savingsAmount = prompt(
      `Total disposable income is £${disposableSubTotal.toFixed(2)}.\nHow much would you like to put into savings?`
    );

    let finalTotal = dispIncome(disposableSubTotal, savingsAmount);
    alert(`The final amount of disposable income is £${finalTotal.toFixed(2)}.`);
  } catch (err) {
    console.log(err);
  }
}

addNewIncomeItem();
addNewExpenseItem();
savingsAndTotal();
