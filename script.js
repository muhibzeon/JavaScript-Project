'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = ' ';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov} ${type}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

//Display the total balance
const calcDisplaybalance = function (movements) {
  const balance = movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);

  labelBalance.textContent = `${balance} EUR`;
};

calcDisplaybalance(account1.movements);

//Display total Summery
const calcDisplaySummery = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

calcDisplaySummery(account1.movements);

//Create user name
const createUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);

//Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log('testing');

const money = [400, 200, 120, -98, 5000, 7800, 142, 345, 6300, -910];

console.log('----FOROF----');
for (const [i, mon] of money.entries()) {
  if (mon > 0) {
    console.log(`Money ${i + 1}: You deposited ${mon} tk`);
  } else {
    console.log(`Money ${i + 1}: You withdrew ${Math.abs(mon)} tk`);
  }
}

console.log('----FOREACH----');
money.forEach(function (mon, i, arr) {
  if (mon > 0) {
    //console.log(`Money ${i + 1}: You deposited ${mon} tk`);
  } else {
    //console.log(`Money ${i + 1}: You withdrew ${Math.abs(mon)} tk`);
  }
});

const eurotoUSD = 1.1;

const movementsToUSD = money.map(mon => mon * eurotoUSD);

//console.log(movementsToUSD);

const newArr = [];
for (const mon of money) newArr.push(mon * eurotoUSD);
//console.log(newArr);

const balance = movements.reduce(function (mov, curr, i, arr) {
  console.log(`Iteration ${i}: ${mov}`);
  return mov + curr;
}, 100);

//console.log(balance);

const calcCatsAgeToHuman = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : age * 2 + 16));
  console.log(humanAges);

  const average = humanAges.reduce(
    (age, mov, i, arr) => (age + mov) / arr.length,
    0
  );
  //console.log(average);
};

calcCatsAgeToHuman([2, 1, 5, 7, 3]);
//console.log(accounts);
