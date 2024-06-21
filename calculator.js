function Calculator(){
    this.math = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    this.calculate = function(str){
        let sep = str.split(' ');

        let a = parseInt(sep[0]);
        let op = sep[1];
        let b = parseInt(sep[2]);

        if(op === '/' && b === 0){
            return 'Stop it. Get some help.'
        }

        if(!this.math[op] || isNaN(a) || isNaN(b))
            {
                return NaN
            }

        return this.math[op](a, b);
    };
}

function pressed(e){
    let result = 0;

    if(e.target.name === "clear"){
        clear();
    }
    else if(e.target.innerHTML === "+" || e.target.innerHTML === "-" 
    || e.target.innerHTML === "*" || e.target.innerHTML === "/"){
        if(display.innerHTML.indexOf('+') === -1 && display.innerHTML.indexOf('-') === -1 &&
           display.innerHTML.indexOf('*') === -1 && display.innerHTML.indexOf('/') === -1){
            display.innerHTML += " " + e.target.innerHTML + " ";
        }
    }
    else if(e.target.name === "equals"){
        result = math.calculate(display.innerHTML);
        display.innerHTML = result;
    }
    else{
        if(display.innerHTML === result){
            clear();
        }
        display.innerHTML += e.target.innerHTML;
    }
}

function clear(){
    display.innerHTML = "";
}

const math = new Calculator();
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.button');
buttons.forEach(buttons => buttons.addEventListener('click', pressed));
