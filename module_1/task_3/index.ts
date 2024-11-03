interface Account {
    replenish: (amonut: number) => void;
    withdraw: (amount: number) => void;
}

{
    class DebitAccount implements Account {
        private balance: number;
        replenish: (amonut: number) => void;
        withdraw: (amount: number) => void;
        getBalance: () => number;
    
        constructor(balance: number) {
            this.balance = balance;
    
            this.getBalance = () => {
                return this.balance;
            }
    
            this.replenish = (amount: number) => {
                this.balance += amount;
            }
    
            this.withdraw = (amount: number) => {
                this.balance -= amount;
            }
        }
    }
    
    const debit = new DebitAccount(1000);
    console.log(debit.getBalance());
    debit.replenish(2000);
    console.log(debit.getBalance());
    debit.withdraw(3000);
    console.log(debit.getBalance());

    class CreditAccount implements Account {
        private debt: number;
        replenish: (amonut: number) => void;
        withdraw: (amount: number) => void;
        getDebt: () => number;

        constructor(debt: number) {
            this.debt = debt * -1;
    
            this.getDebt = () => {
                return this.debt;
            }
    
            this.replenish = (amount: number) => {
                this.debt += amount;
            }
    
            this.withdraw = (amount: number) => {
                this.debt -= amount;
            }
        }
    }

    const credit = new CreditAccount(1000);
    console.log(credit.getDebt());
    credit.replenish(2000);
    console.log(credit.getDebt());
    credit.withdraw(3000);
    console.log(credit.getDebt());
}
