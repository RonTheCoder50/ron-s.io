
// functionality for calculator 

let inp = document.querySelector("input");
let btns = document.querySelectorAll("#btnn");

let values = []; //permanent
let str = []; //temp

let operators = ['+','-','*','/','%'];

let clean = false;
let inpReplace = false;

//buttons
for(let btn of btns) {
    btn.addEventListener("click", function(event){
        if(clean) { //after submission clean input
            inp.value = "";
            clean = false;
        }
        
        //input screen operation
        if(values.length == 0 && str.length == 0 && (btn.textContent === "x^2" || btn.textContent === '%')) {
            // console.log("we return.");
            return;
        }
        else if(btn.textContent === "AC" || btn.textContent === "+/-") {
            inp.value = inp.value;
        }
        else if(btn.textContent == '.' && str.length == 0) { //if first one is dot
            inp.value += '0';
            inp.value += '.';
        } else if(btn.textContent == '.' && str.includes('.')) { //handles edge case for btn in input
            inp.value += '';
        }
        else if(operators.includes(btn.textContent)) { //for operator
            let last = values[values.length-1];
            if(!operators.includes(last)) {
                inp.value += btn.textContent;
            } else if(str.length == 0){
                inp.value = inp.value.slice(0,-1) + btn.textContent;
            } else {
                inp.value += btn.textContent;
            }
        } 
        else { //if operands or nums
            inp.value += btn.textContent;
        }
        
        //new logic  <------------ Main-Logic ------------>

        let val = btn.textContent; //button click activity
        
        //edge cases
        if(val == 'C') {
            clearAll();
        }
        else if(val == "AC") {
            //
            if(values.length == 0 && str.length == 0) {
                return;
            } else {
                if(values.length == 0 && str.length > 0) {
                    str.pop();
                } else if(values.length != 0 && str.length != 0) {
                    str.pop();
                } else if(values.length != 0 && str.length == 0) {
                    values.pop();
                }
                inp.value = inp.value.slice(0, -1);
            }
        }
        else if(val === "x^2") { //if user needs a square root of an number!
            if(str.length == 0) return;
            else {
               let sqrt = sqrtCalc();
               inp.value = sqrt;
            }
        }
        else if(val == '.' && str.includes('.')) { //ignores if extra unnessary dot appears
            return;
        } 
        else if(val == '.' && str.length == 0) {
            str.push('0');
            str.push('.');
        }
        else if(val == '.' && str.length > 0) {
            str.push('.');
        }
        else if(operators.includes(val)) { //if current is operator + , - etc
            //
            let last = values[values.length-1];

            if(values.length == 0 && str.length == 0 && val == '-') { //first btn is oprator
                str.push(val);
            } else {
                //
                if(last != '' && operators.includes(last) && str.length == 0) { //prev is operator 
                    values[values.length-1] = val; //then exchange curr operator with prev.
                    inp.value = inp.value.slice(0, -1) + val; //update input also..
                } else if(str.length > 0){
                    let data = addLast(str); //to put str all content before operator.
                    values.push(data);
                    values.push(val);
                } else {
                    values.push(val);
                }
            } 
        } else { //in that case btn-content is operand / 12,34,etc
            if(val != '') str.push(val);
        }

        console.log("temp : " , str);
        if(values.length > 0)  console.log("main -> ", values);
    })
}

//add Last logic -->
function addLast(str){
    let val = '';
    while(str.length != 0) {
        val += str.shift();
    }
    console.log("value : ", val);
    return val;
}

//submit button logic
let submitBtn = document.querySelector("#subBtn");
submitBtn.addEventListener("click", function(){
    let val = addLast(str);
    values.push(val);
    console.log(values);

    let ans = calcAns(values);
    inp.value = `answer : ${ans || "0"}`;
    clean = true;
    console.log("answer is : " , ans);
    console.log("calculator calculate successfully ");

    str = [];
    values = [];
});

//answer - expression/calculation Logic ---> (Standard calculation left to right) :
function calcAns(vals) {
    let ans = [];
    let operators = ['+','-','*','/','%'];

    let add = false; // +
    let subs = false; // -
    let mult = false; // *
    let div = false; // /
    let mod = false;

    while(vals.length != 0) {
        let val = vals.shift();
        if(val === '') {
            console.log("unnessary space was skip.");
            continue;
        }

        // 
        if(ans.length > 0 && !operators.includes(val)) {
            let val1 = ans.shift();
            let val2 = val;

            if(add) {
                add = false;
                ans = [];
                let finalAns = Number(val1) + Number(val2);
                ans.push(finalAns);
            } else if(subs) {
                subs = false;
                ans = [];
                let finalAns = Number(val1) - Number(val2);
                ans.push(finalAns);
            } else if(mult) {
                mult = false;
                ans = [];
                let finalAns = Number(val1) * Number(val2);
                ans.push(finalAns);
            } else if(div) {
                div = false;
                ans = [];
                if(Number(val2) === 0) {
                    return "Error"; //handles infinity
                }
                let finalAns = Number(val1) / Number(val2);
                ans.push(finalAns);
            } else if(mod) {
                mod = false;
                ans = [];
                let finalAns = Number(val1) % Number(val2);
                ans.push(finalAns);
            }
        } else {
            if(operators.includes(val)) { //if val is operator!
                switch(val) {
                    case '+':
                        add = true;
                        break;
                    case '-':
                        subs = true;
                        break;
                    case '*':
                        mult = true;
                        break;
                    case '%':
                        mod = true;
                        break;
                    default :
                        div = true;
                        break;
                }
            } else { // if val is operand(value)
                ans.push(val);
            }
        }
    }

    let finalAnswer = ans.shift();
    return finalAnswer;
};
    
//square root calculator
function sqrtCalc() {
    let val = '';
    while(str.length != 0) {
        let v = str.shift();
        val += v;
    }

    return Number(val) * Number(val);
}

//clear
function clearAll(){
    inp.value = "";
    values = [];
    str = [];
    console.log("All data is clear successfully !");
}




