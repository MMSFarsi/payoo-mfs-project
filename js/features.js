document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.remove('hidden')
})