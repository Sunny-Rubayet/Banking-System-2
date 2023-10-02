document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    depositField.value= '';
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    currentDepositTotal=newDepositAmount+previousDepositTotal;
    depositTotalElement.innerText= currentDepositTotal;
    
    

})