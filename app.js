var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");



submitBtn.addEventListener(`click`, submitHandler);

function submitHandler(){
   var ip = Number(initialPrice.value);
   var qty = Number(stocksQuantity.value);
   var curr = Number(currentPrice.value);

   calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = ( loss / initial )* 100;

        showOutput(`Hey the Loss is ${loss}/-Rs. and the loss percent is ${lossPercentage}%`);
        outputBox.style.color = "red";
        

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the Profit is ${profit}/-Rs. and the profit percent is ${profitPercentage}%`);
        outputBox.style.color = "green";
    }else{
        showOutput(`No pain no gain, No gain No pain.`);
        outputBox.style.color = "white";
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}