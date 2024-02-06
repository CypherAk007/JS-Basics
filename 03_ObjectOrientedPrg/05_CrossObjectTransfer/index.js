class Bank{
    constructor(accno,name,bal){
        this.accno = accno
        this.name = name
        this.balance = bal
    }
    withdraw(amount=0){
        if (amount<=this.balance){

            this.balance-=amount
        }else{
            console.log("insuff Balance");
        }
    }
    deposite(amount=0){
        this.balance+=amount
    }
    display(){
        console.log(this.accno,this.name,this.balance);
    }
    transfer(perObj2,amt){
        if (this.balance>amt){

            perObj2.deposite(amt) 
            this.balance-=amt
        }else{
            console.log('insuf balance');
        }
    }
}

b1 = new Bank(1234,'ak',1000)
b1.display()

b2 = new Bank(1123,'bk',1000)
b2.display()

b2.transfer(b1,100)
b1.display()
b2.display()