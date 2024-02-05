class Bank{
    constructor(name,branches){
        this.name = name
        this.branches = branches
    }

    addBranch(branch){
        this.branches.push(branch)
    }

    removeBranch(branch){
        if (this.branches.length==0){
            console.log("No Branches Avail");
        }else{
            this.branches.filter((br,idx)=>
                // return (br!=='b1')
                // console.log(br,idx);
                // console.log(br!=='b1');
                br!='b1'
                // this.display()
            )
        }

    }
    display(){
        console.log(this.name,this.branches);
    }
}

   
b1 = new Bank('HDFC',['b1','b2'])
b1.display()
b1.addBranch('b3')
b1.display()
b1.removeBranch('b3')
b1.display()