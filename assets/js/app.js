

function getInputTotal(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmount = inputField.value;
    const inputText = parseInt(inputFieldAmount);

    return inputText;

}
function getTotalField(elementId, amount){
    const totalField = document.getElementById(elementId);
    const totalFieldAmount = totalField.innerText;
    const totalFieldText = parseInt(totalFieldAmount);
    totalField.innerText = amount;

    
}




// handle total expense even done
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const income = document.getElementById('income-input');
    const food = document.getElementById('food-input');
    const rent = document.getElementById('rent-input');
    const cloth = document.getElementById('cloth-input');
    if(parseFloat(income.value) > 0 && parseFloat(food.value) > 0 && parseFloat(rent.value) > 0 && parseFloat(cloth.value) > 0 ){
            // income amount input 
            const incomeInput = getInputTotal('income-input');

            // expense calculate input
            const foodInput = getInputTotal('food-input');
            const rentInput = getInputTotal('rent-input');
            const clothInput = getInputTotal('cloth-input');

            const totalBalanceExpense = foodInput + rentInput + clothInput;
            getTotalField('total-exp', totalBalanceExpense);




            // total balance 
            const balance = incomeInput - totalBalanceExpense;
            getTotalField('total-balance', balance);

    }
    else{
        document.getElementById('erroMessge').innerText = 'field must be number type data';
    }
    
    


  
});


// add saving balanced event handlar
document.getElementById('save-btn').addEventListener('click', function(){

    const incomeInput = getInputTotal('income-input');


    const saveAmount = getInputTotal('save-input');
    const totalSaveAmount = saveAmount * incomeInput / 100;
    getTotalField('save-amount', totalSaveAmount);



    
})
