document.getElementById('calculate-btn').addEventListener('click', function(){
    // get expense input element
    const foodInput = document.getElementById('food-input');
    const foodInputField = foodInput.value;
    const foodInputText = parseInt(foodInputField);

   
    const rentInput = document.getElementById('rent-input');
    const rentInputField = rentInput.value;
    const rentInputText = parseInt(rentInputField);

    
    const clothInput = document.getElementById('cloth-input');
    const clothInputField = clothInput.value;
    const clothInputText = parseInt(clothInputField);

    // total expense calculete
    const totalExpense = document.getElementById('total-exp');
    const totalExpenseBalance = totalExpense.innerText;
    const totalInputText = parseInt(totalExpenseBalance);

    


    
    
})