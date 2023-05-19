'use strict';

class BankAccount {
  constructor(accountNumber, owner, transactions) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = []
  }
  balance(){
    let sum = 0;
    for(let i = 0; i < this.transactions.length; i++){
      sum += this.transactions[i].amount
    } return sum;
  }
  deposit(amount) {
    let deposit = new Transaction(amount, this.owner)
    this.transactions.push(deposit)
  }
  charge(payee, amount) {
    let charge = new Transaction(-1 * amount, payee)
    this.transactions.push(charge)
  }
  }
class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();

  }
}
console.log(new BankAccount('', ''))

// Tests 

if (typeof describe === 'function') {
  const assert = require('assert');
  describe('#New bank account', function() {
    it('Should create a new bank account', function() {
      let account1 = new BankAccount('666', 'SATAN');
      assert.equal(account1.owner, 'SATAN');
      assert.equal(account1.accountNumber, 666);
      assert.equal(account1.transactions.length, 0);
      assert.equal(account1.balance(), 0)
    });
  });

  describe('#New bank balance', function() {
    it('Should create a new balance', function() {
      let account1 = new BankAccount('666', 'SATAN');
      assert.equal(account1.balance(), 0);
      account1.deposit(666)
      assert.equal(account1.balance(), 666);
      account1.charge('SATAN', 666);
      assert.equal(account1.balance(), 0)
    });
  });

  describe('#New deposit', function() {
    it('Should create a new deposit', function() {
      let transaction1 = new Transaction(666, 'SATAN');
      assert.equal(transaction1.amount, 666);
      assert.equal(transaction1.payee, 'SATAN');
      assert.notEqual(transaction1.date, undefined)
    });
  });
  
  describe('#New charge', function() {
    it('Should create a new charge', function() {
      let transaction1 = new Transaction(-666, 'SATAN');
      assert.equal(transaction1.amount, -666);
      assert.equal(transaction1.payee, 'SATAN');
      assert.notEqual(transaction1.date, undefined)
    });
  });
}