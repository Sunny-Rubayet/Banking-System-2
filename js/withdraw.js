// withdraw button and withdraw field option

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const withdrawFieldString=withdrawField.value;
    const withdrawFieldAmount=parseFloat(withdrawFieldString);
    withdrawField.value='';

// withdraw total box calculation
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const withdrawTotalElementString=withdrawTotalElement.innerText;
    const withdrawTotal=parseFloat(withdrawTotalElementString);

    // const  newWithdrawTotal=withdrawFieldAmount+withdrawTotal;
    // withdrawTotalElement.innerText=newWithdrawTotal;


    

   
// Total Balance option calculation


    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotalElementString=balanceTotalElement.innerText;
    const balanceTotal=parseFloat(balanceTotalElementString);


    if(newWithdrawTotal>withdrawTotal){
        alert('bank faka');
        return;
    }
    const  newWithdrawTotal=withdrawFieldAmount+withdrawTotal;
    withdrawTotalElement.innerText=newWithdrawTotal;






    const newBalanceTotal=balanceTotal-withdrawFieldAmount;
    balanceTotalElement.innerText=newBalanceTotal;

    
    

})