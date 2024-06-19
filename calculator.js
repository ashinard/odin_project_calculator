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
    else if(e.target.innerHTML === "+" || e.target.innerHTML === "-" 
    || e.target.innerHTML === "*" || e.target.innerHTML === "/"){
        if(display.value.indexOf(e.target.innerHTML) === -1){
            display.value += " " + e.target.innerHTML + " ";
        }
    }
    else if(e.target.name === "equals"){
        display.value = math.calculate(display.value);
    }
    else{
        display.value += e.target.innerHTML;
    }
}

function clear(){
    display.value = "";
}

const math = new Calculator();
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.button');
buttons.forEach(buttons => buttons.addEventListener('click', pressed));
buttons.forEach(buttons => buttons.addEventListener('keydown', pressed));
