/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  const variantsOfResult = {
    less: {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    },
    equal: {
      status: "CLOSED",
      change: cid,
    },
    more: {
      status: "OPEN",
      change: [],
    },
  };

  const valuesOfMoney = [
    {
      name: "PENNY",
      value: 0.01,
      amount: null,
    },
    {
      name: "NICKEL",
      value: 0.05,
      amount: null,
    },
    {
      name: "DIME",
      value: 0.1,
      amount: null,
    },
    {
      name: "QUARTER",
      value: 0.25,
      amount: null,
    },
    {
      name: "ONE",
      value: 1,
      amount: null,
    },
    {
      name: "FIVE",
      value: 5,
      amount: null,
    },
    {
      name: "TEN",
      value: 10,
      amount: null,
    },
    {
      name: "TWENTY",
      value: 20,
      amount: null,
    },
    {
      name: "ONE HUNDRED",
      value: 100,
      amount: null,
    },
  ];

  let needToChange = +(cash - price).toFixed(2);
  let allMoneyInCid = 0;

  for (let bill of cid) {
    allMoneyInCid += bill[1];
  }

  allMoneyInCid = +allMoneyInCid.toFixed(2);

  if (needToChange > allMoneyInCid) {
    return variantsOfResult.less;
  } else if (needToChange === allMoneyInCid) {
    return variantsOfResult.equal;
  } else {
    for (let [name, num] of cid) {
      valuesOfMoney.forEach((item) => {
        if (name === item.name) {
          item.amount = Math.round(num / item.value);
        }
      });
    }

    valuesOfMoney.reverse();

    for (let item of valuesOfMoney) {
      if (needToChange >= item.value && item.amount > 0) {
        let change = 0;
        while (needToChange >= item.value && item.amount > 0) {
          change += item.value;
          item.amount--;
          needToChange -= item.value;
          needToChange = +needToChange.toFixed(2);
        }
        variantsOfResult.more.change.push([item.name, change]);
      }
    }

    if (needToChange > 0) {
      return variantsOfResult.less;
    }

    return variantsOfResult.more;
  }
}

  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ]);
