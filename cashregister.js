function checkCashRegister(price, cash, cid) {
  let due = cash - price;
  due = Math.round(100 * due) / 100;
  let status = "";
  let change = [];
  let count = 0;
  let conversion = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  // Loop over each element of CID, starting at largest piece
  for (let i = cid.length - 1; i >= 0; i--) {
    // Number of each coin required in change
    let numCoins = Math.floor(due / conversion[cid[i][0]]);

    // Check if this coin is a factor of the total change due and if we have this coin in CID
    if (numCoins >= 1 && cid[i][1] > 0) {
      let j = 0;

      // Subtract coin from CID until no longer available
      while (cid[i][1] > 0 && due - conversion[cid[i][0]] >= 0) {
        cid[i][1] -= conversion[cid[i][0]];
        cid[i][1] = Math.round(100 * cid[i][1]) / 100;
        due -= conversion[cid[i][0]];
        due = Math.round(100 * due) / 100;
        j++;
      }
      change.push([cid[i][0], j * conversion[cid[i][0]]]);

      // Variable to track of coins left in drawer. If this is == 0 after completing loop, then CID == change due.
      count += cid[i][1];
    }
  }
  if (due > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (count == 0) {
    for (let i in cid) {
      if (!change[i]) {
        change.push(cid[i]);
      }
    }
    status = "CLOSED";
  } else {
    status = "OPEN";
  }
  let result = { status: status, change: change };
  return result;
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));
