document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    
    const inputAddMoney=document.getElementById('input-add-money').value;
    const inputPinNumber=document.getElementById('input-pin-number').value;

    if(inputPinNumber==="552288"){
        const myMoney=document.getElementById('my-money').innerText;
        const moneyNumber=parseFloat(myMoney)
        const inputMoneyNumber=parseFloat(inputAddMoney)
        
        const updateMoney=moneyNumber+inputMoneyNumber;
        
        document.getElementById('my-money').innerText=updateMoney;
        
    }else{
        alert('Something went wrong')
    }
   
    
})

// CashOut ----//

document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();
    const inputCashout=document.getElementById('input-cashout').value;
    const inputPinCash=document.getElementById('input-pin-cash').value;
   if(inputPinCash==="552288"){
    const currentMoney=document.getElementById('my-money').innerText;
    const currentMoneyNumber=parseFloat(currentMoney)
    const inputCashoutNumber=parseFloat(inputCashout)
    const afterCashout=currentMoneyNumber-inputCashoutNumber;
    document.getElementById('my-money').innerText=afterCashout;
    

    
   }else{
    alert('Something went wrong')
   }
  
    

})
