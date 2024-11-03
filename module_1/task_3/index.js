{
    class DebitAccount {
        constructor(balance) {
            this.balance = balance;
            this.getBalance = () => {
                return this.balance;
            };
            this.replenish = (amount) => {
                this.balance += amount;
            };
            this.withdraw = (amount) => {
                this.balance -= amount;
            };
        }
    }
    const debit = new DebitAccount(1000);
    console.log(debit.getBalance());
    debit.replenish(2000);
    console.log(debit.getBalance());
    debit.withdraw(3000);
    console.log(debit.getBalance());
    class CreditAccount {
        constructor(debt) {
            this.debt = debt * -1;
            this.getDebt = () => {
                return this.debt;
            };
            this.replenish = (amount) => {
                this.debt += amount;
            };
            this.withdraw = (amount) => {
                this.debt -= amount;
            };
        }
    }
    const credit = new CreditAccount(1000);
    console.log(credit.getDebt());
    credit.replenish(2000);
    console.log(credit.getDebt());
    credit.withdraw(3000);
    console.log(credit.getDebt());
}
