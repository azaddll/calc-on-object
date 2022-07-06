const calc = {

    firstNumber:0,
    secondNumber:0,
    result:0,

    addition: function(){
        this.result = this.firstNumber + this.secondNumber;
    },
    subtraction:function(){
        this.result = this.firstNumber - this.secondNumber;
    },
    multiplication:function(){
        this.result = this.firstNumber * this.secondNumber;
    },
    division:function(){
        this.result = this.firstNumber / this.secondNumber;
    }
};

calc.firstNumber = 20, 
calc.secondNumber = 3;

calc.multiplication();

console.log(calc.result);