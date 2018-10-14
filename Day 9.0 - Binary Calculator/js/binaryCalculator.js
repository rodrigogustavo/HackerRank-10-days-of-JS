//need to define the js in html page after the buttons, otherwise js will try to add event listener in buttons that doené exists in DOM yet.
//add event Listener on btn 0
document.getElementById('btn0').addEventListener('click', function(){
    document.getElementById('res').innerText += '0';
});
//add event Listener on btn 1
document.getElementById('btn1').addEventListener('click', function(){
    document.getElementById('res').innerText += '1';
});

//clear all
document.getElementById('btnClr').addEventListener('click', function(){
    document.getElementById('res').innerText = '';
});

//define the operators
document.getElementById('btnSum').addEventListener('click', function(){
    document.getElementById('res').innerText += '+';
});

document.getElementById('btnSub').addEventListener('click', function(){
    document.getElementById('res').innerText += '-';
});

document.getElementById('btnMul').addEventListener('click', function(){
    document.getElementById('res').innerText += '*';
});

document.getElementById('btnDiv').addEventListener('click', function(){
    document.getElementById('res').innerText += '/';
});

document.getElementById('btnEql').addEventListener('click', function(){
    compute();
});

function compute(){

    var userInput = document.getElementById('res').innerHTML;
    var nums = /(\d+)/g;

    //get base 10
    const result = userInput.replace(nums, function(match) {
        return parseInt(match, 2);
    });

    //eval in base 10 then convert to base 2.
    document.getElementById('res').innerText = eval(result).toString(2);
}