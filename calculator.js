function Calculator(){
    this.math = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    this.calculate = function(str){
        let sep = str.splice(' ');

        a = sep[0];
        op = sep[1];
        b = sep[2];

        if(!this.math[op] || isNaN(a) || isNaN(b))
            {
                return NaN
            }

        return this.math[op](a, b);
    };
}

function pressed(e){
    if(e.target.name === "clear"){
        clear();
    }
    else if(e.target.name === "+" || e.target.name === "-" 
    || e.target.name === "*" || e.target.name === "/"){
        if(indexOf(e.target.name)=== -1){
            display.innerHTML += " " + e.target.name + " ";
        }
    }
    else if(e.target.name === "equals"){
        display.innerHTML = math.calculate(display.innerHTML);
    }
    else{
        display.innerHTML += e.target.name;
    }
}

function clear(){
    display.innerHTML = "";
}

const math = new Calculator();
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.button');
buttons.forEach(buttons => buttons.addEventListener('click', pressed));
buttons.forEach(buttons => buttons.addEventListener('keydown', pressed));
