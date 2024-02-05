class Bank{
    constructor(accno,bal){
        this.accno = accno
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
        console.log(this.accno,this.balance);
    }
}

b1 = new Bank(1234,1000)
b1.display()
b1.withdraw(9999)
b1.display()
b1.deposite(1000)
b1.display()