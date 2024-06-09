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
    if(e.target.name === "c"){
        clear();
    }
    else if(e.target.name === "="){
        math.calculate(display.innerHTML);
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
