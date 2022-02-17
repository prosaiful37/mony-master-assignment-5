// function getInputTotal(inputId){
//     const foodInput = document.getElementById(inputId);
//     const foodInputField = foodInput.value;
//     const foodInputText = parseInt(foodInputField);
//     return foodInputText;

// }
// function getTotalField(elementInnerText){
//     const totalExpense = document.getElementById(elementInnerText);
//     const totalExpenseBalance = totalExpense.innerText;
//     const proviousTotalExp = parseInt(totalExpenseBalance);
//     // totalExpense.innerText =  getInputTotal;
//     return proviousTotalExp;

    
// }

// handle total expense even done
document.getElementById('calculate-btn').addEventListener('click', function(){
   
    //
    const incomeInput = document.getElementById('income-input');
    const incomeInputFiled = incomeInput.value;
    const incomeInputText = parseInt(incomeInputFiled);

    
    // get expense input element
    const foodInput = document.getElementById('food-input');
    const foodInputField = foodInput.value;
    const foodInputText = parseInt(foodInputField);
    // const foodInput = getInputTotal('food-input');

   
    const rentInput = document.getElementById('rent-input');
    const rentInputField = rentInput.value;
    const rentInputText = parseInt(rentInputField);
    // const rentInput = getInputTotal('rent-input');
    
    const clothInput = document.getElementById('cloth-input');
    const clothInputField = clothInput.value;
    const clothInputText = parseInt(clothInputField);
    // const clothInput = getInputTotal('cloth-input');

    // total expense calculete
    const totalExpense = document.getElementById('total-exp');
    const totalExpenseBalance = totalExpense.innerText;
    const proviousTotalExp = parseInt(totalExpenseBalance);
    // const totalExp = getTotalField('total-exp');

    // Total expense balance
    const totalBalanceExpense = foodInputText + rentInputText + clothInputText;
    // const totalBalanceExpense = foodInput + rentInput + clothInput;
    totalExpense.innerText =  totalBalanceExpense;

    // update total balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceField = parseInt(totalBalanceText);
    const balance = incomeInputText - totalBalanceExpense;
    totalBalance.innerText = balance;
  



    
   
   
       

    
})