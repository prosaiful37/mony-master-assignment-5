function getInputTotal(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmount = inputField.value;
    const inputText = parseInt(inputFieldAmount);


    if( inputField == text){
        alert('filed must be number');
    }

    // input field empty
    // inputField.value = '';
    return inputText;


    
 

}
function getTotalField(elementId, amount){
    const totalField = document.getElementById(elementId);
    const totalFieldAmount = totalField.innerText;
    const totalFieldText = parseInt(totalFieldAmount);
    totalField.innerText = amount;

    
}

// remaing balance 


// handle total expense even done
document.getElementById('calculate-btn').addEventListener('click', function(){
   
    //income amount input 
    // const incomeInput = document.getElementById('income-input');
    // const incomeInputFiled = incomeInput.value;
    // const incomeInputAmount = parseInt(incomeInputFiled);
    const incomeInput = getInputTotal('income-input');

    
    // get expense input element
    // const foodInput = document.getElementById('food-input');
    // const foodInputField = foodInput.value;
    // const foodInputText = parseInt(foodInputField);
    const foodInput = getInputTotal('food-input');

   
    // const rentInput = document.getElementById('rent-input');
    // const rentInputField = rentInput.value;
    // const rentInputText = parseInt(rentInputField);
    const rentInput = getInputTotal('rent-input');
    
    // const clothInput = document.getElementById('cloth-input');
    // const clothInputField = clothInput.value;
    // const clothInputText = parseInt(clothInputField);
    const clothInput = getInputTotal('cloth-input');
    

    // total expense calculete
    // const totalExpense = document.getElementById('total-exp');
    // const totalExpenseBalance = totalExpense.innerText;
    // const proviousTotalExp = parseInt(totalExpenseBalance);
    // const totalExp = getTotalField('total-exp');
   
    const totalBalanceExpense = foodInput + rentInput + clothInput;
    getTotalField('total-exp', totalBalanceExpense);

    // getTotalField(totalBalanceExpense);
    

    // const totalExpenseAmount = incomeInput - totalBalanceExpense;
    // getTotalField() = totalExpenseAmount;
    

    // Total expense balance
    // const totalBalanceExpense = foodInputText + rentInputText + clothInputText;
    // const totalBalanceExpense = foodInput + rentInput + clothInput;
    // totalExpense.innerText =  totalBalanceExpense;

    // update total balance 
    // const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const totalBalanceField = parseInt(totalBalanceText);
    // const balance = incomeInputAmount - totalBalanceExpense;
    // totalBalance.innerText = balance;
    
    const balance = incomeInput - totalBalanceExpense;
    getTotalField('total-balance', balance);


  

    
});

// add saving balanced event handlar
document.getElementById('save-btn').addEventListener('click', function(){

    // //income amount input 
    // const incomeInput = document.getElementById('income-input');
    // const incomeInputFiled = incomeInput.value;
    // const incomeInputAmount = parseInt(incomeInputFiled);
    const incomeInput = getInputTotal('income-input');


    // // get save input field
    // const saveInput = document.getElementById('save-input');
    // const saveInputFiled = saveInput.value;
    // const saveInputAmount = parseInt(saveInputFiled);
    // const saveAmountTex = saveInputAmount * incomeInputAmount / 100;
    const saveAmount = getInputTotal('save-input');
    const totalSaveAmount = saveAmount * incomeInput / 100;
    getTotalField('save-amount', totalSaveAmount);




    // // save amount value get
    // const saveAmount = document.getElementById('save-amount');
    // const saveAmountText = saveAmount.innerText;
    // const saveTotalAmount = parseInt(saveAmountText);
    // saveAmount.innerText = saveAmountTex;



    // // balanced update
    // const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const totalBalanceField = parseInt(totalBalanceText);
    // const balanceTotal = getTotalField('total-balance');
    

    // const raminingBalanced = document.getElementById('getTotalField');
    // const raminingBalanceText = raminingBalanced.innerText;
    // const raminingBalancedAmount = parseInt(raminingBalanceText);
    // const remainnigTotalBalance = totalBalanceField - saveAmountTex;
    // raminingBalanced.innerText = remainnigTotalBalance;
    




    
})
